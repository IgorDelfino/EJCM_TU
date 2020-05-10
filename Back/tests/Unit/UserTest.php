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

}
