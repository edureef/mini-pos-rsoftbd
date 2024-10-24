<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\PurchaseProduct;
use App\Models\Supplier;
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
        return Inertia::render('purchase/AddPurchase', compact('suppliers', 'products'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'supplier_id' => 'required',
            'products' => 'required|array',
            'discount' => 'required',
            'paidAmount' => 'required',
        ]);

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
        return Inertia::render('purchase/PurchaseDetails', compact('purchase'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseProduct $purchaseProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PurchaseProduct $purchaseProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseProduct $purchaseProduct)
    {
        //
    }
}