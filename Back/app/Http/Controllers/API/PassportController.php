<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\RegisterRequest as RegisterRequest;
use DB;
use Auth;


class PassportController extends Controller
{
    public $sucessStatus = 200;

    public function login(Request $request)//works
    {
      if (Auth::attempt(['email' => request('email'), 'password' => request('password')])){
        $user = Auth::user();
        $token = $user->createToken('MyApp')->accessToken;
        $name = $user->name;
        return response()->json([
          "message" => "foi",
          "user" => $user,
          "token" => $token
          ], 200);
      }
      else{
        return response()->json([
          "message" => "email e senha invalidos!",
          "data" => [
            null
            ]
          ], 500);
        }

    }

    public function getDetails()//works
    {
      $user = Auth::user();
      return response()->json(['user' => $user], 200);
    }

    public function register(RegisterRequest $request)//works
    {
        $user = new User;
        $user->name = $request->name;
        $user->password = bcrypt($request->password);
        $user->email = $request->email;
        $user->save();

        $success['token'] = $user->createToken('MyApp') -> accessToken;
        $success['name'] = $user->name;

        return response() -> json(['success' => $success], 200);

    }

    public function logout()//works
    {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked' => true]);
        $accessToken->revoke();
        return response()->json(['message'=>'realizado'],200);
    }
}
