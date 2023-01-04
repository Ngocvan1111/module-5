import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {
  @Output()
  abc = new EventEmitter();
  id: number = 0;
  product: Product = {category:{id: 0, name: ""}}
  categoryList: Category[] = [];
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.productService.getAllCategory().subscribe(date=>{
      this.categoryList = date
    }, error => {}, ()=>{});



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
      id: new FormControl('',Validators.required),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });


  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  compareFn(c1: Product, c2: Product): boolean {
    return c1.id === c2.id;
  }


  submit() {
    if (this.productForm.valid) {
      this.productService.edit( this.productForm.value.id,this.productForm.value).subscribe(date=>{
        console.log(date)
        console.log(this.productForm.value.category)
      })
      alert("Sua thanh cong" + this.productForm.value.id)
      this.abc.emit("hello word")
      this.router.navigateByUrl("product/list").then(r => {})
    }

  }
}
