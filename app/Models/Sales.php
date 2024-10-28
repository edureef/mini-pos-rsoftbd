<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'products',
        'payment_status',
        'netTotal',
        'paidAmount',
        'discount',
        'dueAmount',
        'grandTotal',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    protected $casts = [
        'products' => 'array',
        'created_at' => 'datetime:d-m-Y',
    ];
}
