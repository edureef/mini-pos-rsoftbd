<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SupplierController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Dashbord');
});
Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
Route::post('/category', [CategoryController::class, 'store'])->name('category.store');
Route::put('/category/{category}', [CategoryController::class, 'update'])->name('category.update');
Route::delete('/category/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');

Route::resource('/customer', CustomerController::class);
Route::resource('/supplier', SupplierController::class);
Route::resource('/brand', BrandController::class);
Route::resource('/product', ProductController::class);

Route::get('/group', [GroupController::class, 'index'])->name('group.index');
Route::post('/group', [GroupController::class, 'store'])->name('group.store');
Route::put('/group/{group}', [GroupController::class, 'update'])->name('group.update');
Route::delete('/group/{group}', [GroupController::class, 'destroy'])->name('group.destroy');
