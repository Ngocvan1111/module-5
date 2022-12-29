import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit, OnChanges {
  @Input()
  product: Product = {}
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.student = this.studentService.findById(this.student.id);
  }
  deleteStudent(){
    this.productService.deleteById(this.product.id);
    document.getElementById('exampleModal')?.click();
  }

}
