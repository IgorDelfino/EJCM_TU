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

    /**public function testRegisterUser(){
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

    }*/

    /**public function testLoginUser(){
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
        
    }*/

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