import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../model/facility/facility-type';
import {RentType} from '../model/facility/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient:HttpClient) { }
  getAllRentType(): Observable<RentType[]>{
    return this.httpClient.get<RentType[]>('http://localhost:3000/rentTypes');

  }
}
