import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoHangService} from '../service/lo-hang.service';
import {Consignment} from '../model/consignment';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input()
  consignment: Consignment = {id: 0, code: '', product: {id: 0, name: '', origin: '',
      price: 0, unit: ''}, amountProduct: 0, importDate: '', dateOfManufacture: '', expirationDate: ''};
  @Output()
  emiter = new EventEmitter();
  constructor(private loHangService: LoHangService) { }

  ngOnInit(): void {
  }
  deleteConsignment() {
  this.loHangService.deleteById(this.consignment.id).subscribe(date => {
    this.emiter.emit('say hello');
  });
  alert('Xóa thành công');
  }
}
