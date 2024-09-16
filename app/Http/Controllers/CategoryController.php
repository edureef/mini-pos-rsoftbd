<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
        $categories = $category->latest()->paginate(10);
        return Inertia::render("Category", compact("categories"));
    }

    public function store(Request $request, Category $category)
    {
        $validate = $request->validate([
            "name" => ['required', 'max:50'],
        ]);
        $category->create($validate);
        return redirect()->back();
    }

    public function update(Request $request, Category $category)
    {
        $validate = $request->validate([
            'name' => ['required', 'max:50'],
        ]);
        $category->update($validate);
        return redirect()->back();
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->back();
    }
}
