<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\User;
use App\Purchase;

class UserTestUnit extends TestCase
{

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    /**
     * Função hello world! Para exemplificar o primeiro teste.
     */
    public function testUserHasName() {
        $user = new User();
        $user->name = "Teste";
        $this->assertTrue($user->userHasName());
    }

    /**
    *    Teste da função Add Credits;
    *    Exemplo para o assertEquals.
    *    @dataProvider creditsProvider
    */
    public function testAddCredits($credits, $expected) {
        $user = new User();
        $user->credits = 10;
        $this->assertEquals($expected, $user->addCredits($credits));
    }

    /*
        Testando que a cada compra finalizada um novo carrinho é iniciado!
        Gancho para falar do Mock.
    */
    public function testUserDontHaveEnoughCredits() {
        $user = new User();
        $user->credits = 40;
        $purchase = $this->createStub(Purchase::class);
        
        $purchase->method('getTotalPrice')->willReturn(50);

        $this->assertFalse($user->finishPurchase($purchase));
    }

    /* 
        Teste de exemplo Mock
    */
    public function testUserHasEnoughCredits() {
        $user = $this->getMockBuilder(User::class)->setMethods(['beginPurchase'])->getMock(); //Estou mockando apenas o beginPurchase
        $user->credits = 55;
        $purchase = $this->createStub(Purchase::class);
        $purchase->method('getTotalPrice')->willReturn(50);
        
        $user->expects($this->once())->method('beginPurchase');

        $bought = $user->finishPurchase($purchase);

        $this->assertEquals(5,$user->credits);
    }

    /*
        Outro exemplo de Mock
    
    public function testBeginPurchase() {
        $user = new User();
        $user->id = 3;

        $purchase = $this->getMockBuilder(Purchase::class)->setMethods(['createPurchase'])->getMock();
        $purchase->expects($this->once())->method('createPurchase')->with($user->id);
        $user->beginPurchase();
    }*/


    /*  Pode ser abordado como feature test depois
        Teste das relações de usuário
    
    public function testUserHasPurchases() {
        $user = factory(User::Class)->create();
        $purchase = factory(Purchase::class)-create(['user_id' => $user->id]);

        $this->assertTrue($user->purchases->contains($purchase));

        $this->assertEquals(1, $user->purchases->count());

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $user->purchases);
    }
    */

    public function creditsProvider()
    {
        return [
            [20,30],
            [450,460],
            [350,360],
            [360,370]
        ];
    }

    
    

}
