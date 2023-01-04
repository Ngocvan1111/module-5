import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {Contract} from '../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private httpClient: HttpClient) { }
  getAllContract(): Observable<Contract[]>{
    return this.httpClient.get<Contract[]>('    http://localhost:3000/contracts');

  }
  saveContract(contract: any) {
    return this.httpClient.post('http://localhost:3000/contracts', contract);
  }
}
