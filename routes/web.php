<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Dashbord');
});
Route::get('/brand', function () {
    return inertia('Brand');
});
Route::get('/category', function () {
    return inertia('Category');
});
