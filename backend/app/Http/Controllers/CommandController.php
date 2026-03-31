<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Command;
use App\models\Produit;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\ReservationRequest;
use App\Http\Requests\updateStatusRequest;

class CommandController extends Controller
{
    public function index(){
        $commands = Command::with('produit')->where('client_id', auth('api')->id())->get();

        return response()->json([
            'commands' => $commands
        ]);
    }

    public function reservations(){
        $commands = Command::with('produit')->get();

        return response()->json([
            'commands' => $commands
        ]);
    }

    public function store(Request $request){


        foreach($request->produits as $produit){
            Command::create([
                'quantite' => $produit['quantity'],
                'statuts' => 'en attente',
                'prixTotal' => $produit['quantity'] * $produit['prix'],
                'produit_id' => $produit['id'],
                'client_id' => auth('api')->id()
            ]);
        } 

        return response()->json([
            'message' => 'commande cree avec succes'
        ]);
    }

    public function valide(updateStatusRequest $request, Command $command){
        $command->statuts = $request->statuts;
        $command->save();

        return response()->json([
            'message' => 'statuts update succes',
            'reservation' => $reservation
        ]);

    }

    public function annuler(Reservation $reservation){

        $reservation->delete();

        return response()->json([
            "message" => "annuler reservation successfully"
        ]);
    }
}
