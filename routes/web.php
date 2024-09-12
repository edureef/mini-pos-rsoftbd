<?php

use App\Http\Controllers\BrandController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Dashbord');
});
// Route::get('/brand', function () {
//     return inertia('Brand');
// });
Route::get('/category', function () {
    return inertia('Category');
});

Route::resource('/brand', BrandController::class);
