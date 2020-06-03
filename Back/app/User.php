<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Http\Request;
use App\Purchase;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Função de exemplo inicial "Hello World do PHPUnit"
     * 
     */
    public function userHasName() {
        if ($this->name) {
            return true;
        } else {
            return false;
        }
    }

    /*
        Função que cria usuários, recebendo da controller
    */
    public function createUser(Request $request){
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $user->save();

        return response($user);
    }
    
    /* Relacionando o usuário com as compras*/
    public function purchases() {
        return $this->hasMany('App\Purchase');
    }

    /* Adiciona créditos ao usuário*/
    public function addCredits($value) {
        return $this->credits += $value;
    }

    /* Inicia uma compra com o carrinho vazio */
    public function beginPurchase() {
        Purchase::createPurchase($this->id);
    }

    /* Usuário finaliza a compra de um carrinho de produtos */
    public function finishPurchase($purchase) {
        //$purchase = Purchase::findOrFail($id);//
        if ($purchase->total_price > $this->credits) {
            return false;
        } 
        $this->credits -= $purchase->total_price;
        $this->beginPurchase();
        return true;
    }
 
}
