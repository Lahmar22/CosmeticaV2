<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Reservation;
use App\models\Produit;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\ReservationRequest;
use App\Http\Requests\updateStatusRequest;

class ReservationController extends Controller
{
    public function index(){
        $reservation = Reservation::where('client_id', auth('api')->id())->get();

        return response()->json([
            'reservation' => $reservation
        ]);
    }

    public function reservations(){
        $reservation = Reservation::with('produit')->get();

        return response()->json([
            'reservations' => $reservation
        ]);
    }

    public function store(ReservationRequest $request){

        $produit = Produit::find($request->produit_id);

        $resevation = Reservation::create([
            'quantite' => $request->quantite,
            'statuts' => 'en attente',
            'prixTotal' => $request->quantite * $produit->prix,
            'produit_id' => $request->produit_id,
            'client_id' => auth('api')->id()
        ]);

        return response()->json([
            'message' => 'reservation succees',
            'reservation' => $resevation
        ]);
    }

    public function valide(updateStatusRequest $request, Reservation $reservation){
        $reservation->statuts = $request->statuts;
        $reservation->save();

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
