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
        return Inertia::render('purchase/PurchaseList');
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
        // dd($request->all());
        $validated = $request->validate([
            'supplier_id' => 'required',
            'products' => 'required',
            'discount' => 'required',
            'paidAmount' => 'required',
        ]);

        return redirect()->route('purchase.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(PurchaseProduct $purchaseProduct)
    {
        //
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
