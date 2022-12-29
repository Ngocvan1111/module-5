import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-delete-modal-customer',
  templateUrl: './delete-modal-customer.component.html',
  styleUrls: ['./delete-modal-customer.component.css']
})
export class DeleteModalCustomerComponent implements OnInit {
  @Input()
  customer: Customer = {id: 0, name: '', customerType: { id: 0, name: ''}};

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteCustomer() {
    document.getElementById('exampleModal')?.click();
    alert('delete successfuly');
  }
}
