import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  product: Product = {};
  id: number = 0;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = data.get('id')
      console.log("abc" + this.id)
      if (this.id != null) {
        // @ts-ignore
        this.product = this.productService.findById(parseInt(this.id))
        console.log(this.product)
      }
    }, error => {

    }, () => {

    })
  }


  submit() {
    if (this.productForm.valid) {
      this.productService.edit(this.productForm.value)
      alert("Sua thanh cong" + this.productForm.value.id)
      this.router.navigateByUrl("product/list")
    }

  }
}
