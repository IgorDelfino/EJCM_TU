<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\User;

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
     * Testa o caso positivo da função UserHasName.
     * 
     * 
     */
    public function testUserHasName() {
        $user = new User();
        $user->name = "Teste";
        $this->assertTrue($user->userHasName());
    }
    /**test */
    /**public function testCreateUser(){
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

    }*/

}
