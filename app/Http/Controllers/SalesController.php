<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Sales;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sales = Sales::with('customer')->latest()->paginate(10);
        return Inertia::render('sales/SalesList', compact('sales'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customers = Customer::latest()->paginate(1000);
        $products = Product::latest()->paginate(1000);
        return Inertia::render('sales/AddSale', compact('customers', 'products'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Stock $stock)
    {
        $request->validate([
            'customer_id' => 'required',
            'products' => 'required|array',
            'discount' => 'required',
            'paidAmount' => 'required',
        ]);

        Sales::create([
            'customer_id' => $request->customer_id,
            'products' => $request->products,
            'netTotal' => $request->netTotal,
            'discount' => $request->discount,
            'paidAmount' => $request->paidAmount,
            'dueAmount' => $request->dueAmount,
            'grandTotal' => $request->grandTotal,
            'payment_status' => $request->dueAmount > 0 ? 'due' : 'paid',
        ]);

        foreach ($request->products as $value) {
            $previousStock = Stock::where('product_id', $value['productName'])->first();

            if ($previousStock != null) {
                $stock->updateOrCreate(['product_id' => $value['productName']], [
                    'quantity' => $previousStock->quantity - $value['quantity'],
                ]);
            }
        }

        return redirect()->route('sales.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Sales $sale)
    {
        $sale = $sale->with('customer')->find($sale->id);
        $products = Product::latest()->get();
        return Inertia::render('sales/SaleDetails', compact('sale', 'products'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sales $sale)
    {
        $sale = $sale->with('customer')->find($sale->id);
        $customers = Customer::latest()->paginate(1000);
        $products = Product::latest()->paginate(1000);
        return Inertia::render('sales/EditSale', compact('customers', 'products', 'sale'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sales $sale)
    {
        $request->validate([
            'customer_id' => 'required',
            'products' => 'required|array',
            'discount' => 'required',
            'paidAmount' => 'required',
        ]);

        $sale->update([
            'customer_id' => $request->customer_id,
            'products' => $request->products,
            'netTotal' => $request->netTotal,
            'discount' => $request->discount,
            'paidAmount' => $request->paidAmount,
            'dueAmount' => $request->dueAmount,
            'grandTotal' => $request->grandTotal,
            'payment_status' => $request->dueAmount > 0 ? 'due' : 'paid',
        ]);

        return redirect()->route('sales.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sales $sale)
    {
        $sale->delete();
        return redirect()->back();
    }
}
