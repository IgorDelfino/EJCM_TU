<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Purchase extends Model
{
    public function createPurchase($user_id) {
        
        $purchase = new Purchase();

        $purchase->total_price = 0;
        $purchase->user_id = $user_id;

        $purchase->save();
    } 

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function products() {
        return $this->belongsToMany('App\Product', 'carts')->withPivot('quantity');
    }

    public function getTotalPrice() {
        return $this->total_price;
    }

}
