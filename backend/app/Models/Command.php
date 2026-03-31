<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;

class Command extends Model
{
    protected $fillable = [
        'quantite',
        'statuts',
        'prixTotal',
        'produit_id',
        'client_id',
    ];

    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}
