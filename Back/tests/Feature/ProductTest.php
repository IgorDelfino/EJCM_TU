<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;
use App\Product;
use App\Purchase;

class ProductTest extends TestCase
{

    use RefreshDatabase;

    /**
     * Exemplo de relação belongs to Many.
     *
     * 
     */
     public function testProductBelongsToManyPurchases() {

        $product = factory(Product::class)->create(); 
        $purchase = factory(Purchase::class)->create();

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $product->purchases);

     }
    
}
