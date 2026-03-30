<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;
use App\Http\Requests\CreateCategorieRequest;

class CategorieController extends Controller
{
    public function index(){

        $categories = Categorie::all();

        return response()->json([
            'categorie' => $categories
        ]);
    }
    
    public function store(CreateCategorieRequest $request){

        $categorie = Categorie::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response()->json([
            'categorie' => $categorie
        ]);

    }
}
