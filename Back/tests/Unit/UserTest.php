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
    
    public function testNewPurchaseInitAfterBuy() {
        $user = $this->createMock(User::class);
        $user->credits = 38;
        $purchase = new Purchase();
        $purchase->total_price = 32;
        $user->expects($this->once())->method('beginPurchase');
        $user->finishPurchase($purchase);
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

    /**
     * data provider para a função de teste testAddCredits()
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
    /**
     * teste incompleto feito para ser usado como exemplo
     * @test
     */
    public function incompleteTest()
    {   
        $this->assertEquals(2, 1+1); //essa assertion deve ser feita mesmo com o teste incompleto

        $this->assertEquals(24, 12+12);

        $this->markTestIncomplete('
        mensagem desejada para indicar teste incompleto
        ');
    }

    /**
     * teste pulado
     * @test 
     */
    public function skippedTest()
    {

        $this->assertTrue(true);

        if(true)
        {
            $this->markTestSkipped('teste que deve ser pulado');
        }  
    }

    /**
     * teste 1(dependencies)
     * criado para falhar
     * @test
     */
    public function testeDependencies1(){
        $this->assertTrue(false);
    }

    /**
     * teste 2(dependencies)
     * nao deve ser executado, visto que o teste 1 vai sempre falhar
     * @test
     * @depends testeDependencies1
     */
    public function testDependencies2(){
        $this->assertTrue(true);
    }
    
    

}
