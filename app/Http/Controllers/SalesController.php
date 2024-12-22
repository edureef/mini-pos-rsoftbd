<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Sales;
use App\Models\Stock;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role == 'admin') {
            $sales = Sales::with('customer', 'user')->latest()->paginate(10);
        } else {
            $sales = Sales::with('customer', 'user')->where('user_id', Auth::user()->id)->latest()->paginate(10);
        }
        return Inertia::render('sales/SalesList', compact('sales'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customers = Customer::latest()->paginate(1000);
        $products = Product::latest()->paginate(1000);
        $units = Unit::latest()->get();
        return Inertia::render('sales/AddSale', compact('customers', 'products', 'units'));
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

        foreach ($request->products as $value) {
            $previousStock = Stock::with('product')->where('product_id', $value['productName'])->first();

            if ($value['quantity'] <= 0) {
                return redirect()->back()->with(['error' => 'Quantity must be greater than 0']);
            }

            if ($previousStock != null && $previousStock->quantity >= $value['quantity']) {
                $stock->updateOrCreate(['product_id' => $value['productName']], [
                    'quantity' => $previousStock->quantity - $value['quantity'],
                ]);
            } else {
                return redirect()->back()->with(['error' => 'Insufficient stock for product: ' . $previousStock->product->name]);
            }
        }

        Sales::create([
            'customer_id' => $request->customer_id,
            'user_id' => Auth::user()->id,
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
        $units = Unit::latest()->get();
        return Inertia::render('sales/EditSale', compact('customers', 'products', 'sale', 'units'));
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
            'user_id' => Auth::user()->id,
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
