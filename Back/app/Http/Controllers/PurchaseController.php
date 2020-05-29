<?php

namespace App\Http\Controllers;

use App\Purchase;
use App\Product;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{   
    public $data = "purchase(s) not found";
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchases = Purchase::all();

        if ($purchases) {
            return response()->json($purchases);
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
        $purchase = createPurchase($request);

        return response()->json([$purchase]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $purchase = Purchase::FindOrFail($id);

        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        //
    }

    /**
     * Adiciona o produto no carrinho 
     */
    public function getProduct(Request $request, $id) {
        $product = Product::findOrFail($id);
        $added = $product->updateStock($request->$quantity);
        if($added) {
            $product->carts()->attach($request->purchase_id, ['quantity' => $request->quantity]);
        } else {
          return response()->json(['Produto esgotado!']);
        }
    }

    /**
     * Remove o produto do carrinho.
     */
    public function removeProduct(Request $request, $id) {
        $product = Product::findOrFail($id);
        $removed = $product->updateStock(-$request->$quantity);
        $product->purchases()->detach($request->purchase_id);
    }

}
