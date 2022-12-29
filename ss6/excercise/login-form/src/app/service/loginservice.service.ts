import { Injectable } from '@angular/core';
import {LoginData} from '../login-data';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginDates: LoginData[] = [
    {userName: 'laivanngoc', password: 'ngocvan1'},
    {userName: 'dangthinhi', password: 'nhidang1'},
    {userName: 'hoviettrung', password: 'viettrung1'},
  ];

  constructor() { }
  getAll() {
    return this.loginDates;
  }
}
