import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer.service';

@Component({
  selector: 'app-task25-danh-sach-khach-hang',
  templateUrl: './task25-danh-sach-khach-hang.component.html',
  styleUrls: ['./task25-danh-sach-khach-hang.component.css']
})
export class Task25DanhSachKhachHangComponent implements OnInit {
  temp: Customer = {id: 0, name: '', customerType: {id: 0, name: ''}};
  customers: Customer [] = [];

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomer().subscribe(date => {
      this.customers = date;
    }, error => {}, () => {});
  }

  ngOnInit(): void {
  }

}
