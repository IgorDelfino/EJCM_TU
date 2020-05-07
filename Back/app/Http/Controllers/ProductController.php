<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public $data = "Product(s) not found";
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        if ($products){
          return response()->json([$products]);
        } else {
          return response()->error($data, 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product;

        $product->name = $request->name;
        $product->price = $request->price;
        $product->stock = $request->stock;

        $product->save();

        return response()->json([$product]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);

        if ($product) {
          return response()->json([$product]);
        } else {
          return response()->error($data, 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $product = Product::findOrFail($id);

      if ($product) {
        if ($request->name)
          $product->name = $request->name;
        if ($request->price)
          $product->price = $request->price;
        if ($request->stock)
          $product->stock = $request->stock;

        $product->save();

        return response()->json([$product]);
      } else {
        return response()->error($data,400);
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product) {
          $product = Product::destroy($id);
          return response()->json(["Product destroyed"]);
        } else {
          return response()->error($data, 400);
        }
    }
    public function purchase($id)
    {
        $product = Product::findOrFail($id);
        if ($product->stock > 0){
          $product->stock = ($product->stock - 1);
          $product->save();
          return response()->json(["Stock has been changed"]);
        } else {
          return response()->json(["We are out of stock"]);
        }

    }
}
