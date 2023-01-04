import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('    http://localhost:3000/employee');
  }
}
