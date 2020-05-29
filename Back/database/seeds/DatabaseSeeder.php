<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this-call(UserTableSeeder::Class);
        $this-call(PurchaseTableSeeder::Class);
        $this-call(ProductTableSeeder::Class);
    }
}
