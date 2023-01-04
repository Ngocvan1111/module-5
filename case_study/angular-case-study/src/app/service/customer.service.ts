import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {isArrayLike} from 'rxjs/internal-compatibility';
import {CustomerType} from '../model/customer/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('  http://localhost:3000/customers');
  }
  getAbc(server: any, server2: any, aa: any): Observable<Customer[]> {
    // @ts-ignore
    if (aa != -1) {
      return this.httpClient.get<Customer[]>('  http://localhost:3000/customers?name_like' + '=' + server + '&email_like=' + server2 + '&customerType.id=' + aa);
    } else {
      return this.httpClient.get<Customer[]>('  http://localhost:3000/customers?name' + '_like' + '=' + server + '&email_like=' + server2);

    }
  }

  saveProduct(customer: any) {
    return this.httpClient.post('http://localhost:3000/customers', customer);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>('    http://localhost:3000/customerTypes');
  }

  deleteById(id: number | undefined) {
    return this.httpClient.delete('http://localhost:3000/customers/' + id);

  }

  findById(number: number): Observable<Customer> {
    return this.httpClient.get<Customer>(' http://localhost:3000/customers/' + number);

  }

  edit(id: number, customer: any) {
    // @ts-ignore
    return this.httpClient.put(' http://localhost:3000/customers/' + id, customer);

  }


}
