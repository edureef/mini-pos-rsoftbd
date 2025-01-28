<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::latest()->paginate(10);
        return Inertia::render('Supplier', compact('suppliers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('supplier/CreateSupplier');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Supplier $supplier)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
            // 'email' => ['unique:suppliers'],
            'email' => [''],
            'phone_number' => ['required', 'regex:/^\d{11,11}$/'],
            'company_name' => ['required', 'max:255'],
            'address' => ['max:255'],
        ]);

        $supplier->create($validtae);

        return redirect()->route('supplier.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        return Inertia::render('supplier/editSupplier', $supplier);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Supplier $supplier)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => [''],
            'phone_number' => ['required', 'min:11', 'max:11'],
            'company_name' => ['required'],
            'address' => ['max:255'],
        ]);

        $supplier->update($validtae);

        return redirect()->route('supplier.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        $supplier->delete();
        return redirect()->back();
    }
}
