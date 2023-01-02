import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  getAllCustomer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('  http://localhost:3000/customers');

}
}
