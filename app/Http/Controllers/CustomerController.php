<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::latest()->paginate(10);
        return Inertia::render('Customer', compact('customers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('customer/CreateCustomer');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Customer $customer)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['nullable', 'unique:customers'],
            'phone_number' => ['required', 'regex:/^\d{11,11}$/'],
            'address' => ['max:255'],
        ]);

        $customer->create($validtae);

        if ($request->createCustomerModal == 'isCreateCustomerModal') {
            return redirect()->back();
        }

        return redirect()->route('customer.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        return Inertia::render('customer/editCustomer', $customer);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['nullable', 'unique:customers'],
            'phone_number' => ['required', 'min:11', 'max:11'],
            'address' => ['max:255'],
        ]);

        $customer->update($validtae);
        return redirect()->route('customer.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();
        return redirect()->back();
    }
}
