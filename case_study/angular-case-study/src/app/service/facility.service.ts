import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {Facility} from '../model/facility/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient: HttpClient) { }
  getAllFacility(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>('    http://localhost:3000/facilitys');

  }
}
