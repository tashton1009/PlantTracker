<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('plants', 'PlantsController@index');

Route::get('plants/{plant}', 'PlantsController@show');

Route::post('plants', 'PlantsController@store');

Route::put('plants/{plant}', 'PlantsController@update');

Route::delete('plants/{plant}', 'PlantsController@delete');
