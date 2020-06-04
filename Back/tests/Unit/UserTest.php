<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\User;
use App\Purchase;

class UserTest extends TestCase
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

    /*
        Teste da função Add Credits;
        Exemplo para o assertEquals.
    */
    public function testAddCredits() {
        $user = new User();
        $user->credits = 10;
        $this->assertEquals(30, $user->addCredits(20));
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

    
    /*  

        public function testCreateUser(){
        $data = ['name' => 'igor',
                'email' => 'igor@igor.com',
                'password' => '123456',
                'credits' => 500];

        $user = User::createUser($data);

        $this->assertInstanceOf(User::class, $user);

        $this->assertEquals($data['name'],$user->name);
        $this->assertEquals($data['email'],$user->email);
        $this->assertEquals($data['password'],$user->password);
        $this->assertEquals($data['credits'],$user->credits);

    }
    */

}
