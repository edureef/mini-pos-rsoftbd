<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Group;
use App\Models\Supplier;
use App\Models\Unit;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // for ($i = 0; $i < 100000; $i++) {
        //     Brand::create([
        //         'name' => fake()->name,
        //     ]);
        // }

        // for ($i = 0; $i < 100000; $i++) {
        //     Category::create([
        //         'name' => fake()->name,
        //     ]);
        // }

        // for ($i = 0; $i < 100000; $i++) {
        //     Group::create([
        //         'name' => fake()->name,
        //     ]);
        // }

        // for ($i = 0; $i < 100000; $i++) {
        //     Customer::create([
        //         'name' => fake()->name,
        //         'email' => fake()->email,
        //         'phone_number' => '01' . fake()->numberBetween(100000000, 999999999),
        //         "address" => fake()->address,
        //     ]);
        // }

        // for ($i = 0; $i < 100000; $i++) {
        //     Supplier::create([
        //         'name' => fake()->name,
        //         'email' => fake()->email,
        //         'phone_number' => '01' . fake()->numberBetween(100000000, 999999999),
        //         "company_name" => fake()->company,
        //         "address" => fake()->address,
        //     ]);
        // }

        // $product_units = ['kg', 'gm', 'liter', 'ml', 'pcs', 'box'];
        // for ($i = 0; $i < 6; $i++) {
        //     Unit::create([
        //         'name' => fake()->randomElement($product_units)
        //     ]);
        // }
    }
}
