<?php

namespace App\Http\Controllers;

use App\Models\PurchaseProduct;
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
        // Validate input
        $validated = $request->validate([
            'cashierId' => 'required',
            'month' => 'required|integer',
            'year' => 'required|integer',
        ]);

        // Fetch all cashiers (excluding admin)
        $cashiers = User::where('role', '!=', 'admin')->latest()->get();

        // Base query for sales filtering
        $salesQuery = Sales::with('customer', 'user')
            ->whereMonth('created_at', $request->month)
            ->whereYear('created_at', $request->year);

        $productCostPrice = PurchaseProduct::with('supplier')
            ->whereMonth('created_at', $request->month)
            ->whereYear('created_at', $request->year)
            ->sum('grandTotal');

        if ($request->day > 0) {
            $salesQuery->whereDay('created_at', $request->day);
        }

        // Check for specific cashier or all
        if ($request->cashierId !== 'allCashier') {
            $salesQuery->where('user_id', $request->cashierId);
        }

        // Fetch filtered data and total sales amount
        $filterData = $salesQuery->latest('created_at')->get();
        $totalSalesAmount = $salesQuery->sum('grandTotal');

        if ($filterData->isEmpty()) {
            return redirect()->back()->with(['error' => 'No sales data found.']);
        }

        // Render the report
        return Inertia::render('reports/ProductSalesReport', compact('cashiers', 'filterData', 'totalSalesAmount', 'productCostPrice'));
    }
}
