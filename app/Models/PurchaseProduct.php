<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier_id',
        'products',
        'payment_status',
        'netTotal',
        'paidAmount',
        'discount',
        'dueAmount',
        'grandTotal',
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    protected $casts = [
        'products' => 'array',
        'created_at' => 'datetime:d-m-Y',
    ];
}
