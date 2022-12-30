import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private  httpClient: HttpClient) { }
  getAll(): Observable<Todo[]>{
    // @ts-ignore
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos')

  }
  saveProduct(product: any){
    console.log("not ok")
    return  this.httpClient.post('http://localhost:3000/todos', product)
  }
}

