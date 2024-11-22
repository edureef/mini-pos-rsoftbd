<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function productStocks()
    {
        $stockData = Stock::with('product')->latest()->paginate(10);
        return Inertia::render('reports/ProductStockReport', compact('stockData'));
    }
}
