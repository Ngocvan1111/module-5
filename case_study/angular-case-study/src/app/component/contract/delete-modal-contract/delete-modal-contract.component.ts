import {Component, Input, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract/contract';

@Component({
  selector: 'app-delete-modal-contract',
  templateUrl: './delete-modal-contract.component.html',
  styleUrls: ['./delete-modal-contract.component.css']
})
export class DeleteModalContractComponent implements OnInit {
  @Input()
    // tslint:disable-next-line:max-line-length
  contract: Contract = {id: 0, employee: {id: 0, name: ''}, customer: {id: 0, name: '', customerType: {id: 0, name: ''}}, facility: {id: 0, name: '', facilityType: {id: 0, name: ''}}, dateStart: '', dateEnd: '', deposit: 0, totalPay: 0};

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteContract() {
    document.getElementById('exampleModal')?.click();
    alert('delete successfuly');
  }
}
