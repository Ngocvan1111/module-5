import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility/facility';
import {Customer} from '../model/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient: HttpClient) { }
  getAllFacility(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>('    http://localhost:3000/facilitys');

  }
  saveFacility(facility: any) {
    return this.httpClient.post('http://localhost:3000/facilitys', facility);
  }
  deleteById(id: number | undefined) {
    return this.httpClient.delete('  http://localhost:3000/facilitys/' + id);

  }
  findById(number: number): Observable<Facility> {
    return this.httpClient.get<Facility>(' http://localhost:3000/facilitys/' + number);

  }

  edit(id: number, facility: any) {
    // @ts-ignore
    return this.httpClient.put(' http://localhost:3000/facilitys/' + id, facility);

  }
}
