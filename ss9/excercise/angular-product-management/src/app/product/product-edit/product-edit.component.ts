import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {

  @Input()
  id: number = 0;
  product: Product = {category:{id: 0, name: ""}}
  categoryList: Category[] = [];
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.productService.getAllCategory().subscribe(date=>{
      this.categoryList = date
    }, error => {}, ()=>{})


  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    this.activatedRoute.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = data.get('id')
      console.log("abc" + this.id)
      if (this.id != null) {
        console.log("da zo")
        // @ts-ignore
        this.productService.findById(parseInt(this.id)).subscribe(data=>{
          this.product  = data;
          console.log(data)

        })
      }
    }, error => {

    }, () => {

    })

    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }


  submit() {
    if (this.productForm.valid) {
      this.productService.edit(this.productForm.value)
      alert("Sua thanh cong" + this.productForm.value.id)
      this.router.navigateByUrl("product/list")
    }

  }
}
