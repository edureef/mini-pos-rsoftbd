<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\Stock;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function productStocks()
    {
        $stockData = Stock::with('product')->latest()->paginate(10);
        return Inertia::render('reports/ProductStockReport', compact('stockData'));
    }

    public function deleteStock(Request $request, Stock $stock)
    {
        $stock->where('id', $request->id)->delete();
        return redirect()->back();
    }
    public function productSalesReport()
    {
        $cashiers = User::where('role', '!=', 'admin')->latest()->get();
        return Inertia::render('reports/ProductSalesReport', compact('cashiers'));
    }

    public function getSalesReport(Request $request)
    {
        $validated = $request->validate([
            'cashierId' => 'required',
            'month' => 'required',
            'year' => 'required',
        ]);

        $cashiers = User::where('role', '!=', 'admin')->latest()->get();

        if ($request->cashierId == 'allCashier') {
            $filterData = Sales::with('customer', 'user')->whereMonth('created_at', $request->month)->whereyear('created_at', $request->year)->latest('created_at')->get();
            return Inertia::render('reports/ProductSalesReport', compact('cashiers', 'filterData'));
        }

        // Filter by a specific cashier
        if ($request->cashierId != 'allCashier') {
            $filterData = Sales::with('customer', 'user')
                ->where('user_id', $request->cashierId)
                ->whereMonth('created_at', $request->month)
                ->whereYear('created_at', $request->year)
                ->latest('created_at')
                ->get();
            return Inertia::render('reports/ProductSalesReport', compact('cashiers', 'filterData'));
        }
    }
}
