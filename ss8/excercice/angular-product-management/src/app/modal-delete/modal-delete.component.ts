import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit, OnChanges {
  @Input()

  product: Product = {category:{id: 0, name: ""}}
  products: Product[] = [];
  @Output()
  emiter = new EventEmitter()
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.student = this.studentService.findById(this.student.id);
  }
  deleteStudent(){
    this.productService.deleteById(this.product.id).subscribe(date =>{
      this.emiter.emit("1")
    });
    alert(this.product.id)

    this.productService.getAllProduct().subscribe(date =>{
      this.products = date
    })
    document.getElementById('exampleModal')?.click();
  // }

}}
