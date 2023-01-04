import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer.service';
import {CustomerType} from '../../../model/customer/customer-type';

@Component({
  selector: 'app-task25-danh-sach-khach-hang',
  templateUrl: './task25-danh-sach-khach-hang.component.html',
  styleUrls: ['./task25-danh-sach-khach-hang.component.css']
})
export class Task25DanhSachKhachHangComponent implements OnInit {
  temp: Customer = {id: 0, name: '', customerType: {id: 0, name: ''}};
  customers: Customer [] = [];
  customerTypes: CustomerType[] = [];
  Name: any;
  Email: any;
  CustomerTypeId: any;
  p: number = 1;



  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomer().subscribe(date => {
      this.customers = date;
    }, error => {}, () => {});
    this.customerService.getAllCustomerType().subscribe(date => {
      this.customerTypes = date
    })
    ///////
    this.Email = '';
    this.CustomerTypeId = -1;
    this.Name = '';
  }

  ngOnInit(): void {
  }
  SearchBox(){
    this.customerService.getAbc(this.Name , this.Email, this.CustomerTypeId).subscribe(date => {
      this.customers = date;
      console.log('Đây là: ' + this.Email +this.CustomerTypeId);
    });
  }
  reload() {
    this.customerService.getAllCustomer().subscribe(data =>{
      this.customers = data;
      console.log("ok")
    }, error => {}, () =>{})

  }
}
