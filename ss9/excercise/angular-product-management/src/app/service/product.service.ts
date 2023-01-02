import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }
  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(' http://localhost:3000/products');
  }
  getAllCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>('  http://localhost:3000/category');
  }
  saveProduct(product: any) {
    return  this.httpClient.post('http://localhost:3000/products',product);
  }
  findById(number: number): Observable<Product>   {
     return  this.httpClient.get<Product>(' http://localhost:3000/products/'+ number);

  }

  edit(id: number, product: any) {
    // @ts-ignore
    return this.httpClient.put(' http://localhost:3000/products/' + id, product)

  }
  deleteById(id: number | undefined) {
    return  this.httpClient.delete('http://localhost:3000/products/'+ id)

  }
}
