<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//user routes
Route::get('users', 'UserController@index');
Route::get('user/{id}', 'UserController@show');
Route::post('user', 'UserController@store');
Route::put('user/{id}', 'UserController@update');
Route::delete('user/{id}', 'UserController@destroy');
//product routes
Route::get('products', 'ProductController@index');
Route::get('product/{id}', 'ProductController@show');
Route::post('product', 'ProductController@store');
Route::put('product/{id}', 'ProductController@update');
Route::delete('product/{id}', 'ProductController@destroy');
Route::post('purchase/{id}', 'ProductController@purchase');




//passport routes
Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');
Route::group(['middleware' => 'auth:api'], function() {
  Route::get('logout', 'API\PassportController@logout');
  Route::post('getDetails', 'API\PassportController@getDetails');
});







Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
