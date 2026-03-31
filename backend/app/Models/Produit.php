<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Categorie;
use App\Models\Command;

class Produit extends Model
{
    protected $fillable = [
        'name',
        'description',
        'prix',
        'images',
        'categorie_id',
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    public function command()
    {
        return $this->hasMany(Command::class);
    }
}
