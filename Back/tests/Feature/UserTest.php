<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;
use App\User;
use App\Purchase;

class UserTestFeature extends testCase{
    
    use RefreshDatabase;

    /** @test  
     * Deliberar sobre o fato dele retornar um erro geral, explicar a importância e diferença disso para os testes unitários
    */
    public function testUsersDatabaseHasExpectedColumns()
    {
        $this->assertTrue( 
          Schema::hasColumns('users', [
            'id','name', 'email', 'email_verified_at', 'password', 'credits'
        ]), 1);
    }

    /*  Pode ser abordado como feature test depois
        Teste das relações de usuário, todos os atributos precisam poder ser nulos
    */
    public function testUserHasPurchases() {
        $user = factory(User::Class)->create();
        $purchase = factory(Purchase::class)->create(['user_id' => $user->id]);

        $this->assertTrue($user->purchases->contains($purchase));

        $this->assertEquals(1, $user->purchases->count());

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $user->purchases);
    }
    

    /**
     * test for get
     */
    public function testGetUsers(){
        $this->withoutExceptionHandling();

        $response = $this->get('api/users');

        $response->assertStatus(200);
    }

    /**
     * test for post 
     */
    public function testPostUser(){
        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' => '123456',
            'credits' => 500,
        ];

        $this->withoutExceptionHandling();

        $response = $this->post('api/user', $data);

        $this->assertCount(1, User::all());
    }

    /*public function testLoginUser(){
        $logindata = [
            'email' => 'tef@tef.com',
            'password' => '123456'
        ];
        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' => '123456',
            'credits' => 500,
        ];

        $this->withoutExceptionHandling();

        $this->post('api/user',$data);

        $response = $this->post('api/login', $logindata);

        $this->assertOk();
        
    }*/
    
}