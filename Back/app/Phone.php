<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class phone extends Model
{
    /* Telefone pertence a um usuário */
    public function user() {
        return $this->belongsTo('App\User');
    }
}
