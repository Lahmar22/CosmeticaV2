<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommandController;

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

    Route::get('/commands', [CommandController::class, 'index']);
    Route::post('/commandes', [CommandController::class, 'store']);
    Route::put('/commands/{command}', [CommandController::class, 'annuler']);
    Route::get('/allCommands', [CommandController::class, 'allCommands']);
    Route::put('/valide/{command}', [CommandController::class, 'valide']);
    Route::get('/commands/{command}', [CommandController::class, 'show']);
});