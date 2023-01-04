import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility/facility';
import {HttpClient} from '@angular/common/http';
import {FacilityType} from '../model/facility/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient:HttpClient) { }
  getAllFacilityType(): Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>('      http://localhost:3000/facilityTypes');

  }
}
