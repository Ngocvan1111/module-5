import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  temp:  Product = {category:{id: 0, name: ""}}
  products: Product[] = [];
  p: number = 2;

  constructor(private productService: ProductService ) {
     this.productService.getAllProduct().subscribe(data =>{
       this.products = data;
     }, error => {}, () =>{})

  }

  ngOnInit(): void {

  }


  reload() {
    this.productService.getAllProduct().subscribe(data =>{
      this.products = data;
      console.log("ok")
    }, error => {}, () =>{})

  }
}
