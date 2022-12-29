import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../model/contract/contract';

@Component({
  selector: 'app-task29-danh-sach-hop-dong',
  templateUrl: './task29-danh-sach-hop-dong.component.html',
  styleUrls: ['./task29-danh-sach-hop-dong.component.css']
})
export class Task29DanhSachHopDongComponent implements OnInit {
  contracts: Contract[] = [

    {id: 1,
      employee: {id: 1, name: 'Lại Văn Ngọc'},
      customer: {id: 1, name: 'Nguyễn Văn Chung', customerType: {id: 1, name: 'Diamond'}},
      facility: {id: 1, name: 'Villa 01', facilityType: {id: 1, name: 'House'}},
      dateStart: '2021-09-01',
      dateEnd: '2022-10-12',
      deposit: 10000,
      totalPay: 1000000},
    {id: 2,
      employee: {id: 1, name: 'Lại Văn Ngọc'},
      customer: {id: 1, name: 'Nguyễn Văn Chung', customerType: {id: 1, name: 'Diamond'}},
      facility: {id: 1, name: 'Villa 01', facilityType: {id: 1, name: 'House'}},
      dateStart: '2021-12-14',
      dateEnd: '2022-10-12',
      deposit: 10000,
      totalPay: 1000000},
    {id: 3,
      employee: {id: 1, name: 'Lại Văn Ngọc'},
      customer: {id: 1, name: 'Nguyễn Văn Chung', customerType: {id: 1, name: 'Diamond'}},
      facility: {id: 1, name: 'Villa 01', facilityType: {id: 1, name: 'House'}},
      dateStart: '2021-02-12',
      dateEnd: '2022-10-12',
      deposit: 10000,
      totalPay: 1000000},
    {id: 4,
      employee: {id: 1, name: 'Lại Văn Ngọc'},
      customer: {id: 1, name: 'Nguyễn Văn Chung', customerType: {id: 1, name: 'Diamond'}},
      facility: {id: 1, name: 'Villa 01', facilityType: {id: 1, name: 'House'}},
      dateStart: '2021-01-12',
      dateEnd: '2022-10-12',
      deposit: 10000,
      totalPay: 1000000},
    {id: 5,
      employee: {id: 1, name: 'Lại Văn Ngọc'},
      customer: {id: 1, name: 'Nguyễn Văn Chung', customerType: {id: 1, name: 'Diamond'}},
      facility: {id: 1, name: 'Villa 01', facilityType: {id: 1, name: 'House'}},
      dateStart: '2021-12-12',
      dateEnd: '2022-10-12',
      deposit: 10000,
      totalPay: 1000000},
    {id: 5,
      employee: {id: 1, name: 'Lại Văn Ngọc'},
      customer: {id: 1, name: 'Nguyễn Văn Chung', customerType: {id: 1, name: 'Diamond'}},
      facility: {id: 1, name: 'Villa 01', facilityType: {id: 1, name: 'House'}},
      dateStart: '2021-07-12',
      dateEnd: '2022-10-12',
      deposit: 10000,
      totalPay: 1000000},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
