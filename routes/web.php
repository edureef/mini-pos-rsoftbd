<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseProductController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::middleware(['admin'])->group(function () {
    Route::get('/', function () {
        return inertia('Dashbord');
    });

    Route::resource('/users', UsersController::class);

    Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
    Route::post('/category', [CategoryController::class, 'store'])->name('category.store');
    Route::put('/category/{category}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/category/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');

    Route::resource('/customer', CustomerController::class);
    Route::resource('/supplier', SupplierController::class);
    Route::resource('/brand', BrandController::class);
    Route::resource('/unit', UnitController::class);
    Route::resource('/product', ProductController::class);
    Route::resource('/purchase', PurchaseProductController::class);
    Route::resource('/sales', SalesController::class);

    Route::get('/group', [GroupController::class, 'index'])->name('group.index');
    Route::post('/group', [GroupController::class, 'store'])->name('group.store');
    Route::put('/group/{group}', [GroupController::class, 'update'])->name('group.update');
    Route::delete('/group/{group}', [GroupController::class, 'destroy'])->name('group.destroy');
    // Reports Routes
    Route::get('/getProductStocks', [ReportsController::class, 'productStocks'])->name('getProductStocks');
    Route::delete('/deleteProductStocks/{id}', [ReportsController::class, 'deleteStock'])->name('deleteProductStocks');
    Route::get('/saleReport', [ReportsController::class, 'productSalesReport'])->name('saleReport');
    Route::post('/saleReport', [ReportsController::class, 'getSalesReport'])->name('getSaleReport');
});

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return inertia('Dashbord');
    });
    Route::resource('/customer', CustomerController::class);
    Route::resource('/sales', SalesController::class);
});
