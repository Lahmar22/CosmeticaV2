<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;
class Categorie extends Model
{
    protected $fillable = [
        'name',
        'description',

    ];

    public function produit()
    {
        return $this->hasMany(Produit::class);
    }
}
