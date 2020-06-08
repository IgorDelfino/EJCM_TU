<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Product;
use App\Exceptions\OutOfStockException;

class ProductTest extends TestCase
{
    public function testOutOfStockException() {
        $product = new Product();
        $product->stock = 5;
        $quantity = 6;
        $this->expectException(OutOfStockException::class);
        $updated = $product->updateStock($quantity);
    }
}
