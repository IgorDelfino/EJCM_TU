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

        $user = User::first();

        $response = $this->get('api/user/'.$user->id);

        $response->assertStatus(200);


    }

    /**
     * test for post 
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

    public function testLoginUser(){
        $logindata = [
            'email' => 'user@user.com',
            'password' => '123456'
        ];
        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
            'credits' => 500,
        ];

        $this->withoutExceptionHandling();

        $this->post('api/user',$data);

        $user = User::first();

        $response = $this->post('api/login',$logindata);

        $response->AssertJson([
            'message' => 'foi',
        ]);
        
        $response->assertJsonCount(3, $key=null);

        $token = $response->json('token');

        $response->assertStatus(200);
        
    }

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

    public function testUpdateUser(){
        $data = [
            'name' =>  'user',
            'email' => 'user@user.com',
            'password' => '123456',
        ]; 

        //$this->withoutExceptionHandling();

        $this->post('api/user', $data);

        $user = User::first();

        $data = [
            'name' =>  'igor',
            'email' => 'igor@igor.com',
            'password' => '12345654321',
            'credits' => 700,
        ];

        $response = $this->put('api/user/'.$user->id.'/', $data);

        $this->assertEquals('igor', $user->fresh()->name);

        $this->assertEquals('igor@igor.com', $user->fresh()->email);

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

        $this->post('api/user', $data);

        $login = $this->post('api/login', $data);

        $token = $login->json('token');

        $response = $this->get('api/logout',['Authorization' => 'Bearer '.$token]);

        $response->AssertJson([
            'message' => 'realizado',
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
        
        $logindata = [
            'email' => 'user@user.com',
            'password' => '123456'
        ];  

        $post = $this->post('api/user',$data);

        $login = $this->post('api/login', $logindata);

        $token = $login->json('token');

        $response = $this->get('api/getDetails',['Authorization' => 'Bearer '.$token]);

        $response->assertStatus(200);

        $user2 = $response->json('user');

        $this->assertContains('user', $user2);

        $this->assertContains('user@user.com', $user2);
    }
}