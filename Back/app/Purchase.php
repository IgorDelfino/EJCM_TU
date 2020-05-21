<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    public function createPurchase(Request $request){
        
        $purchase = new Purchase;

        $purchase->date = $request->date;
        $purchase->total_price = $request->total_price;

        $purchase->save();

        return json($purchase);
    }
}
