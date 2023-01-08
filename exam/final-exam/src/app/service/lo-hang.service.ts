import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Consignment} from '../model/consignment';

@Injectable({
  providedIn: 'root'
})
export class LoHangService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Consignment[]>{
    return this.httpClient.get<Consignment[]>(' http://localhost:8080/Consignment/list');
  }
  // tslint:disable-next-line:typedef
  deleteById(id: number | undefined) {
    return this.httpClient.delete('http://localhost:8080/Consignment/list/' + id);
  }
  // tslint:disable-next-line:typedef
  saveLoHang(loHang: any) {
    return this.httpClient.post('http://localhost:8080/Consignment/list', loHang);
  }
  findById(id: number): Observable<Consignment>{
    return this.httpClient.get<Consignment>('http://localhost:8080/Consignment/list/' + id);
  }
  // tslint:disable-next-line:typedef
  edit(id: number, consignment: any) {
    // @ts-ignore
    return this.httpClient.put(' http://localhost:8080/Consignment/list/' + id, consignment);

  }

}
