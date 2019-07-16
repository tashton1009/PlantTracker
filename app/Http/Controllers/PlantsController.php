<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App/Plant;

class PlantsController extends Controller
{
    public function index()
    {
      return Plant::all();
    }

    public function show(Plant $plant)
    {
      return $plant;
    }

    public function store(Request $request, Plant $plant)
    {
      $this->validate($request, [
        'name' => 'required|unique:products|max:255',
        'sunlight' => 'required'
    ]);

      $plant = Plant::create($request->all());
      return response()->json($plant, 201);
    }

    public function update(Request $request, Plant $plant)
    {
      $plant->update($request->all());
      return response()->json($plant, 201);
    }

    public function delete(Plant $plant)
    {
      $plant->delete();
      return response()->json(null, 204);
    }
}
