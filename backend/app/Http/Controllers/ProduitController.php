<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Produit;
use App\Http\Requests\CreateProduitRequest;

class ProduitController extends Controller
{
    public function index(){
        $produits = Produit::with('categorie')->get();

        return response()->json([
            'produits' => $produits,
        ]);
    }

    public function store(CreateProduitRequest $request){
        $produit = Produit::create([
            'name' => $request->name,
            'description' => $request->description,
            'prix' => $request->prix,
            'images' => $request->images,
            'categorie_id' => $request->categorie_id
        ]);

        return response()->json([
            'message' => 'Produit create success',
            'produit' => $produit
        ]); 
    }

    public function destroy(Produit $produit){
        
        $produit->delete();

        return response()->json([
            "message" => "destroy successfully"
        ]);

    }

}
