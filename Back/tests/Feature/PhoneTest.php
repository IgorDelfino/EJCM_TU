<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;
use App\User;
use App\Phone;

class PhoneTest extends TestCase
{

    use RefreshDatabase;

    /**
     * Testando relacionamento one to one com Usuário
     * 
     * */

    public function testPhoneBelongsToUser() {

        $user = factory(User::class)->create(); 
        $phone = factory(Phone::class)->create(['user_id' => $user->id]); 

        // Método 1:
        $this->assertInstanceOf(Phone::class, $user->phone); 
        
        // Método 2:
        $this->assertEquals(1, $user->phone->count()); 
    }

}
