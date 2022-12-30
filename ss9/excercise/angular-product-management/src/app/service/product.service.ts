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
  //
  // deleteById(id: number | undefined) {
  //   if(id != null){
  //     let product = this.findById(id);
  //     if (product != null){
  //       let length = this.products.length
  //       for (let i = 0; i< length; i++){
  //         if(product.id === this.products[i].id){
  //           this.products.splice(i,1);
  //           break;
  //         }
  //       }
  //     }
  //   }
  //
  // }
  //
  // edit(product: Product) {
  //   for(let i = 0; i< this.products.length; i++){
  //     if(this.products[i].id == product.id){
  //       this.products[i] = product;
  //       break;
  //     }
  //   }
  //
  // }
  deleteById(id: number | undefined) {
    return  this.httpClient.delete('http://localhost:3000/products/'+ id)

  }
}
