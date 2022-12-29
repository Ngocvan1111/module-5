import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-task25-danh-sach-khach-hang',
  templateUrl: './task25-danh-sach-khach-hang.component.html',
  styleUrls: ['./task25-danh-sach-khach-hang.component.css']
})
export class Task25DanhSachKhachHangComponent implements OnInit {
  temp: Customer = {id: 0, name: '', customerType: {id: 0, name: ''}};
  customers: Customer [] = [
    {id: 1,
     customerType: {id: 1, name: 'Diamond'},
     name: 'Lại Văn Ngọc',
     dateOfBirth: '1994-12-06',
     idCard: '245236243',
     phoneNumber: '0393090815',
     email: 'l.v.ngoc94@gmail.com',
     address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
    {id: 2,
      customerType: {id: 2, name: 'Gold'},
      name: 'Nguyễn Văn Chung',
      dateOfBirth: '1994-12-06',
      idCard: '245236243',
      phoneNumber: '0393090815',
      email: 'l.v.ngoc94@gmail.com',
      address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
    {id: 3,
      customerType: {id: 3, name: 'member'},
      name: 'Đặng Thị Nhi',
      dateOfBirth: '1994-10-20',
      idCard: '245236243',
      phoneNumber: '0393090815',
      email: 'l.v.ngoc94@gmail.com',
      address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
    {id: 4,
      customerType: {id: 1, name: 'Diamond'},
      name: 'Lại Văn Ngọc',
      dateOfBirth: '1994-12-06',
      idCard: '245236243',
      phoneNumber: '0393090815',
      email: 'l.v.ngoc94@gmail.com',
      address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
    {id: 5,
      customerType: {id: 2, name: 'Gold'},
      name: 'Lại Văn Ngọc',
      dateOfBirth: '1994-12-06',
      idCard: '245236243',
      phoneNumber: '0393090815',
      email: 'l.v.ngoc94@gmail.com',
      address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
    {id: 6,
      customerType: {id: 1, name: 'Dinamond'},
      name: 'Lại Văn Ngọc',
      dateOfBirth: '1994-12-06',
      idCard: '245236243',
      phoneNumber: '0393090815',
      email: 'l.v.ngoc94@gmail.com',
      address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
    {id: 7,
      customerType: {id: 1, name: 'Dinamond'},
      name: 'Lại Văn Ngọc',
      dateOfBirth: '1994-12-06',
      idCard: '245236243',
      phoneNumber: '0393090815',
      email: 'l.v.ngoc94@gmail.com',
      address: '130/3 Hồ Xuân Hương - Ngũ Hành Sơn - Đà Nẵng'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
