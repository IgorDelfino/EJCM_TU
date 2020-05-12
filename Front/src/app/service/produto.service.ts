import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produto } from './produto'
export const produtoUrl = 'api/produto' // URL to web api

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto>(produtoUrl)
      .pipe(
        catchError(err => this.handleError(err, 'getProduto')),
      )
  }

  getProduto(id:number): Observable<Produto> {
    const params = new HttpParams().set('id', id.toString())
    return this.http.get<Produto>(produtoUrl, { params })
      .pipe(
        catchError(err => this.handleError(err, 'getProduto')),
      )
  }

   handleError(error: HttpErrorResponse, methodName: string): Observable<any> {
    console.error(`${methodName} failed due to ${error.message}`)

    return of(undefined)
  }
}
