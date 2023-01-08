import { Component, OnInit } from '@angular/core';
import {LoHangService} from '../service/lo-hang.service';
import {Consignment} from '../model/consignment';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  consignments: Consignment[] = [{id: 11, code: 'LH-0001', product: {id: 0, name: '', origin: '', price: 0, unit: ''},
    amountProduct: 0, importDate: '', dateOfManufacture: '', expirationDate: ''}];
  temp: Consignment = {id: 0, code: '', product: {id: 0, name: '', origin: '',
      price: 0, unit: ''}, amountProduct: 0, importDate: '', dateOfManufacture: '', expirationDate: ''};
  p = 1;
  // sanPham: any;
  constructor(private loHangService: LoHangService) {
    this.loHangService.getAll().subscribe(date => {
      this.consignments = date;
      console.log(this.consignments);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  reload() {
    this.loHangService.getAll().subscribe(date => {
      this.consignments = date;
    });
  }

  // timKiem() {
  //   this.loHangService.search(this.sanPham).subscribe(date => {
  //     this.consignments = date;
  //     console.log(this.sanPham);
  //   });
  // }
}
