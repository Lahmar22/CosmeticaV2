<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ReservationController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);


Route::middleware('auth:api')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('/user', [UserController::class, 'index']);
    Route::get('/produits', [ProduitController::class, 'index']);
    Route::post('/storeProduit', [ProduitController::class, 'store']);
    Route::post('/destroy', [ProduitController::class, 'destroy']);
    Route::get('/categories', [CategorieController::class, 'index']);
    Route::post('/store', [CategorieController::class, 'store']);

    Route::get('/reservation', [ReservationController::class, 'index']);
    Route::post('/reserver', [ReservationController::class, 'store']);
    Route::delete('/annuler/{reservation}', [ReservationController::class, 'annuler']);
    Route::get('/reservations', [ReservationController::class, 'reservations']);
    Route::put('/valide/{reservation}', [ReservationController::class, 'valide']);
});