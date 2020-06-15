<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;
use App\User;
use App\Purchase;
use App\Phone;

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

    /* Teste one to one com a Model Phone */
    public function testUserHasOnePhone() {
        $user = factory(User::Class)->create();
        $phone = factory(Phone::class)->create(['user_id' => $user->id]);

        // Método 1:
        $this->assertInstanceOf(Phone::class, $user->phone);

        // Método 2:
        $this->assertEquals(1, $user->phone->count());
    }


    /**
     * test for get
     */
    public function testGetUsers(){
        //$this->withoutExceptionHandling();

        $response = $this->get('api/users');

        $response->assertStatus(200);
    }

    /**
     * test for get/id
     */
    public function testGetUserWithID(){
        //$this->withoutExceptionHandling();

        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' => bcrypt('123456'),
            'credits' => 500,
        ];

        $this->post('api/user', $data);

        $user = User::first();

        $response = $this->get('api/user/'.$user->id);

        $response->assertStatus(200);


    }

    /**
     * test for post
     */
    public function testPostUser(){
        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' => bcrypt('123456'),
            'credits' => 500,
        ];

        //$this->withoutExceptionHandling();

        $response = $this->post('api/user', $data);

        $this->assertCount(1, User::all());
    }

    public function testRegisterUser(){
        $this->withoutExceptionHandling();

        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' =>'123456',
            'confirmPassword' =>'123456'
        ];

        $response = $this->post('api/register', $data);

        $response->assertStatus(200);

        $this->assertCount(1, User::all());

    }

    public function testLoginUser(){
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

        $this->post('api/login',$logindata)->assertStatus(200);

    }

    public function testDeleteUser(){

        //$this->withoutExceptionHandling();

        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' => '123456',
        ];

        $this->post('api/user', $data);

        $this->assertCount(1, User::all());

        $user = User::first();

        $response = $this->delete('api/user/'. $user->id);

        $this->assertCount(0, User::all());

        $response->assertStatus(200);

    }

    public function testUpdateUser(){
        $data = [
            'name' =>  'tef tef',
            'email' => 'tef@tef.com',
            'password' => '123456',
        ];

        $this->withoutExceptionHandling();

        $this->post('api/user', $data);

        $user = User::first();

        $data = [
            'name' =>  'igor',
            'email' => 'igor@igor.com',
            'password' => '12345654321',
            'credits' => 700,
        ];

        $response = $this->put('api/user/'.$user->id.'/', $data);

        $user = User::first();

        $this->assertEquals('igor', $user->name);

        $this->assertEquals('igor@igor.com', $user->email);

        $this->assertEquals('12345654321', $user->password);

        $this->assertEquals(700, $user->credits);


    }

}
