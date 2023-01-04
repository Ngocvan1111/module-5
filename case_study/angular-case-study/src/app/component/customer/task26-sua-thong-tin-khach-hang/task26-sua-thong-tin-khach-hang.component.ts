import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../../model/customer/customer-type';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/customer/customer';
import {differenceInYears} from "date-fns";

@Component({
  selector: 'app-task26-sua-thong-tin-khach-hang',
  templateUrl: './task26-sua-thong-tin-khach-hang.component.html',
  styleUrls: ['./task26-sua-thong-tin-khach-hang.component.css']
})
export class Task26SuaThongTinKhachHangComponent implements OnInit {

  customerTypeList: CustomerType[] = [];
  customer: Customer = {id:0, customerType: {id: 0, name: ''}, name: ''}
  id: number = 0;
  editForm: FormGroup;
  regexpName: RegExp = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
  regexpIdCard: RegExp = /^\d{9}|\d{11}$/;
  regexpPhoneNumber: RegExp = /^(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})$/;
  regexpEmail: RegExp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.customerService.getAllCustomerType().subscribe(date => {
      this.customerTypeList = date
    }, error => {}, () => {})
    // lây thông tin id từ customerlist //
    this.activatedRoute.paramMap.subscribe(date => {
      // @ts-ignore
      this.id = date.get('id')
      if (this.id != null) {
        // @ts-ignore
        this.customerService.findById(parseInt(this.id)).subscribe(data => {
          this.customer = data;
        }, error => {}, () => {})
      }
    })




    this.editForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern(this.regexpName)]),
      customerType: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required, this.validateOfBirthday] ),
      idCard: new FormControl('', [Validators.required, Validators.pattern(this.regexpIdCard)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.regexpPhoneNumber)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.regexpEmail)]),
      address: new FormControl('', [Validators.required]),
    });
  }



  ngOnInit(): void {
  }
  validateOfBirthday(birthday: AbstractControl) {
    let date = new Date(birthday.value);
    let age = differenceInYears(new Date(), date);
    return (age <= 18) ? {'more18age': true} : null;
  }
  compareFn(c1: Customer, c2: Customer): boolean {
    return c1.id === c2.id;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    if (this.editForm.valid){
      this.customerService.edit(this.editForm.value.id, this.editForm.value).subscribe(date => {
        console.log(this.editForm.value.id)
        console.log(this.editForm.value)
      })
      alert('Submit thanh cong');
      this.router.navigateByUrl('task25-danh-sach-khach-hang').then(r => {})
    }
    else {  alert('Submit thất bại'); }



  }

}
