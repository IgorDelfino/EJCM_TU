<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Exceptions\OutOfStockException;

class Product extends Model
{

    /* Compras que contém este produto */
    public function purchases() {
        return $this->belongsToMany('App\Purchase', 'carts')->withPivot('quantity');
    }

    /* Função que atualiza o estoque de produtos */
    public function updateStock($quantity) {
        if ($quantity > $this->stock) {
            throw new OutOfStockException('Sem Estoque!');
        } else {
            $this->stock -= $quantity;
            return true;
        }
    }

}
