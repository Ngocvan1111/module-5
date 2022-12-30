import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categorys: Category[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAllCategory().subscribe(date =>{
      this.categorys = date
    },error => {},()=>{})
  }

  ngOnInit(): void {
  }
  submit() {
    this.productService.saveProduct(this.productForm.value).subscribe(date=>{
      console.log(date)
    })

    // const product = this.productForm.value;
    // this.productService.saveProduct(product);
    // this.productForm.reset();
  }

}
