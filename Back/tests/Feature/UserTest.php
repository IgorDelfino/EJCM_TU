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

        $response = $this->post('api/login', $logindata);

        $this->assertOk();
        
    }
    
}