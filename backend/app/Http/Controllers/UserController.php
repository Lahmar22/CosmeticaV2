<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();

        return response()->json([
            'user' => $users,
        ]);
    }


}
