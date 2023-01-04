import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer.service';

@Component({
  selector: 'app-delete-modal-customer',
  templateUrl: './delete-modal-customer.component.html',
  styleUrls: ['./delete-modal-customer.component.css']
})
export class DeleteModalCustomerComponent implements OnInit {
  @Input()
  customer: Customer = {id: 0, name: '', customerType: { id: 0, name: ''}};

  @Output()
  emiter = new EventEmitter()
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteCustomer() {
    this.customerService.deleteById(this.customer.id).subscribe(date =>{
      this.emiter.emit("")
    });
    alert('delete successfuly');
  }
}
