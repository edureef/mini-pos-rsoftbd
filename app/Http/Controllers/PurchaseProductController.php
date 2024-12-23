<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\PurchaseProduct;
use App\Models\Stock;
use App\Models\Supplier;
use App\Models\Unit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PurchaseProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $purchases = PurchaseProduct::latest()->with('supplier')->paginate(10);
        return Inertia::render('purchase/PurchaseList', compact('purchases'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $suppliers = Supplier::latest()->paginate(1000);
        $products = Product::latest()->paginate(1000);
        $units = Unit::latest()->get();
        return Inertia::render('purchase/AddPurchase', compact('suppliers', 'products', 'units'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Stock $stock)
    {
        $request->validate([
            'supplier_id' => 'required',
            'products' => 'required|array',
            'discount' => 'required',
            'paidAmount' => 'required',
        ]);

        foreach ($request->products as $value) {
            if ($value['quantity'] <= 0) {
                return redirect()->back()->with(['error' => 'Quantity must be positive number']);
            }
            $previousStock = Stock::where('product_id', $value['productId'])->first();
            $stock->updateOrCreate(['product_id' => $value['productId']], [
                'quantity' => $previousStock == null ? $value['quantity'] : $value['quantity'] + $previousStock->quantity,
            ]);
        }

        PurchaseProduct::create([
            'supplier_id' => $request->supplier_id,
            'products' => $request->products,
            'netTotal' => $request->netTotal,
            'discount' => $request->discount,
            'paidAmount' => $request->paidAmount,
            'dueAmount' => $request->dueAmount,
            'grandTotal' => $request->grandTotal,
            'payment_status' => $request->dueAmount > 0 ? 'due' : 'paid',
        ]);

        return redirect()->route('purchase.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($purchase)
    {
        $purchase = PurchaseProduct::where('id', $purchase)->with('supplier')->first();
        $products = Product::latest()->get();
        return Inertia::render('purchase/PurchaseDetails', compact('purchase', 'products'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseProduct $purchase)
    {
        $suppliers = Supplier::latest()->paginate(1000);
        $products = Product::latest()->paginate(1000);
        $purchase = $purchase->where('id', $purchase->id)->with('supplier')->first();
        $units = Unit::latest()->get();
        return Inertia::render('purchase/EditPurchase', compact('purchase', 'suppliers', 'products', 'units'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PurchaseProduct $purchase)
    {
        $request->validate([
            'supplier_id' => 'required',
            'products' => 'required|array',
            'discount' => 'required',
            'paidAmount' => 'required',
        ]);

        $purchase->update([
            'supplier_id' => $request->supplier_id,
            'products' => $request->products,
            'netTotal' => $request->netTotal,
            'discount' => $request->discount,
            'paidAmount' => $request->paidAmount,
            'dueAmount' => $request->dueAmount,
            'grandTotal' => $request->grandTotal,
            'payment_status' => $request->dueAmount > 0 ? 'due' : 'paid',
        ]);

        return redirect()->route('purchase.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseProduct $purchase)
    {
        $purchase->delete();
        return redirect()->back();
    }
}
