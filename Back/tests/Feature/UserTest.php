<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\User;

class UserTestFeature extends testCase{
    
    use RefreshDatabase;

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
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => bcrypt('123456'),
            'credits' => 500,
        ];

        $this->post('api/user', $data);

        $user = User::findOrFail(1);

        $response = $this->get('api/user/'.$user->id);

        $gottenUser = $response->json('user');//aqui recebemos um array com as informações do usuario que recebemos no get

        $this->assertContains('user', $gottenUser);//aqui comparamos se o array possui a informação que desejamos

        $response->assertStatus(200);


    }

    /**
     * test for post 
     * nesse teste checamos se utilizarmos a rota api/user com o metodo post() conseguimos
     * adicionar o usuario descrito por $data ao banco de dados
     */
    public function testPostUser(){
        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => bcrypt('123456'),
            'credits' => 500,
        ];

        //$this->withoutExceptionHandling();

        $response = $this->post('api/user', $data);

        $this->assertCount(1, User::all());
    }

    /**
     * test register a new user in the database
     */
    public function testRegisterUser(){
        //$this->withoutExceptionHandling();

        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
            'confirmPassword' => '123456',
            'credits' => 500,
        ];

        $response = $this->post('api/register', $data);

        $response->assertStatus(200);

        $this->assertCount(1, User::all());

    }
    
    /**
     * test login
     */
    public function testLoginUser(){
        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
            'credits' => 500,
        ];
        $logindata = [
            'email' => 'user@user.com',
            'password' => '123456'
        ];

        $this->withoutExceptionHandling();

        $this->post('api/user',$data);

        $user = User::first();

        $response = $this->post('api/login',$logindata);

        $response->AssertJson([
            'message' => 'login realizado!',
        ]);
        
        $response->assertJsonCount(3, $key=null);

        $response->assertStatus(200);
        
    }

    /**
     * test for delete
     */
    public function testDeleteUser(){
        
        //$this->withoutExceptionHandling();

        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
        ];

        $this->post('api/user', $data);

        $this->assertCount(1, User::all());

        $user = User::first();

        $response = $this->delete('api/user/'. $user->id);

        $this->assertCount(0, User::all());

        $response->assertStatus(200);

    }

    /**
     * test for put
     */
    public function testUpdateUser(){
        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
        ]; 

        //$this->withoutExceptionHandling();

        $this->post('api/user', $data);

        $user = User::first();

        $modifiedData = [
            'name' =>  'nome',
            'email' => 'nome@nome.com',
            'password' => '12345654321',
            'credits' => 700,
        ];

        $response = $this->put('api/user/'.$user->id.'/', $modifiedData);

        $this->assertEquals('nome', $user->fresh()->name);

        $this->assertEquals('nome@nome.com', $user->fresh()->email);

        $this->assertEquals('12345654321', $user->fresh()->password);

        $this->assertEquals(700, $user->fresh()->credits);

        
    }

    public function testLogoutUser(){

        //$this->withoutExceptionHandling();
        
        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
            'confirmPassword' => '123456',
            'credits' => 500,
        ];

        $register = $this->post('api/register', $data);

        $token = $register->json('token');

        $response = $this->get('api/logout',['Authorization' => 'Bearer '.$token]);

        $response->AssertJson([
            'message' => 'logout realizado!',
        ]);


    }
    
    public function testGetDetailsUser(){

        $this->withoutExceptionHandling();

        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
            'confirmPassword' => '123456',
            'credits' => 500,
        ];  

        $register = $this->post('api/register',$data);

        $token = $register->json('token');
    
        $response = $this->get('api/getDetails',['Authorization' => 'Bearer '.$token]);

        $response->assertStatus(200);

        $user2 = $response->json('user');

        $this->assertContains('user', $user2);

        $this->assertContains('user@user.com', $user2);
    }
}