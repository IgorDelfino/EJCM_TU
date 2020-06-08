<?php

namespace App\Http\Controllers;

use App\User;
use App\Purchase;
use Illuminate\Http\Request;


class UserController extends Controller
{
  public $data = "User(s) not found";
  /**
   * Display a listing of the users in yor database.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
      $users = User::all();

      if ($users) {
        return response()->json([$users]);
      } else {
        return response()->error($data, 400);
      }
  }

  /**
   * Store a newly created user in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {   
    $user = new User; 
    
    $user->createUser($request);
      
      return response()->json(['user' => $user]);
  }

  /**
   * Display the specified user.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
      $user = User::findOrFail($id);

      if ($user) {
        return response()->json(['user' => $user]);
      } else {
        return response()->error($data, 400);
      }
  }

  /**
   * Update the specified user in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $user = User::findOrFail($id);

    if ($user) {
        if($request->name)
            $user->name = $request->name;
        if($request->email)
            $user->email = $request->email;
        if($request->password)
            $user->password = $request->password;
        if($request->credits)
            $user->credits = $request->credits;

        $user->save();

        return response()->json([$user]);
    } else {
        return response()->error($data, 400);
    }
  }

  /**
   * Remove the specified user from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
      $user = User::findOrFail($id);

      if ($user) {
        $user = User::destroy($id);
        return response()->json(["User destroyed"]);
      } else {
        return response()->error($data, 400);
      }
  }

  public function buy(Request $request, $id) {
      $user = User::findOrFail($id);
      $purchase = Purchase::findOrFail($id);
      $bought = $user->finishPurchase($purchase);
      if ($bought) {
          return response()->json(['Compra feita!']);
      } else {
          return response()->json(['Erro! A compra não pode ser feita']);
      }
  }

}
