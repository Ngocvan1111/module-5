import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input()
  customer: Customer = {id: 0, name: '', customerType: {id: 0, name: ''}};
  @Output()
  emiter = new EventEmitter();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }
  deleteCustomer() {
    this.customerService.deleteById(this.customer.id).subscribe(date => {
      this.emiter.emit('');
    });
    alert('delete successfuly');
  }
}
