import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('  http://localhost:8080/product/list');
  }
}
