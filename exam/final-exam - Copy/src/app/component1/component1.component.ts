import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  customers: Customer[] = [{id: 0, name: '', customerType: {id: 0, name: ''}}];
  Name: any;
  Email: any;
  CustomerTypeId: any;
  customerTypes: any;
  p: number = 1;
  temp: Customer = {id: 0, name: '', customerType: {id: 0, name: ''}};
  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe(date => {
      this.customers = date;
    });
  }

  ngOnInit(): void {
  }

  SearchBox() {
    alert('helo');
  }

  reload() {
      this.customerService.getAll().subscribe(date => {
        this.customers = date;
      });
  }
}
