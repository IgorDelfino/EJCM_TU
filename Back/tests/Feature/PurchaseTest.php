<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;
use App\Purchase;
use App\User;

class PurchaseTest extends TestCase
{
    
    public function testPurchaseBelongsToUser() {
        $user = factory(User::Class)->create();
        $purchase = factory(Purchase::class)->create(['user_id' => $user->id]);

        //Testando a existência da instância
        $this->assertInstanceOf(User::class, $purchase->user);
    }

}
