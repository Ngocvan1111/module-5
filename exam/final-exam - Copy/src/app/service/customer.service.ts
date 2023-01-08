import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('  http://localhost:3000/customers');
  }
  // tslint:disable-next-line:typedef
  deleteById(id: number | undefined) {
    return this.httpClient.delete('http://localhost:3000/customers/' + id);

  }
  // tslint:disable-next-line:typedef
  saveCustomer(customer: any) {
    return this.httpClient.post('http://localhost:3000/customers', customer);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>('    http://localhost:3000/customerTypes');
  }
  // tslint:disable-next-line:variable-name
  findById(number: number): Observable<Customer> {
    return this.httpClient.get<Customer>(' http://localhost:3000/customers/' + number);

  }

  // tslint:disable-next-line:typedef
  edit(id: number, customer: any) {
    // @ts-ignore
    return this.httpClient.put(' http://localhost:3000/customers/' + id, customer);

  }



}
