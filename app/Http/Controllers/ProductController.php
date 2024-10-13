<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Group;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->with('brand', 'category', 'group')->paginate(10);
        return Inertia::render('product/ViewProduct', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands = Brand::latest()->paginate(1000);
        $categorys = Category::latest()->paginate(1000);
        $groups = Group::latest()->paginate(1000);
        return Inertia::render('product/AddProduct', compact('brands', 'categorys', 'groups'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Product $product)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
            'description' => ['required', 'max:255'],
            'brand_id' => ['required'],
            'category_id' => ['required'],
            'group_id' => ['required'],
            'unit' => ['required'],
        ]);
        $barcode = ['barcode' => random_int(1000000, 9999999)];
        $product->create($validtae + $barcode);

        return redirect()->route('product.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $products = $product->with('brand', 'category', 'group')->find($product->id);
        return Inertia::render('product/ProductDetails', compact('products'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $products = $product->with('brand', 'category', 'group')->find($product->id);
        $brands = Brand::latest()->paginate(1000);
        $categorys = Category::latest()->paginate(1000);
        $groups = Group::latest()->paginate(1000);
        return Inertia::render('product/EditProduct', compact('products', 'brands', 'categorys', 'groups'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
            'description' => ['required', 'max:255'],
            'brand_id' => ['required'],
            'category_id' => ['required'],
            'group_id' => ['required'],
            'unit' => ['required'],
        ]);
        $product->update($validtae);

        return redirect()->route('product.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->back();
    }
}
