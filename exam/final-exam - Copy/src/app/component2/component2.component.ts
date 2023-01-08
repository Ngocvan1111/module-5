import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import { differenceInYears } from 'date-fns';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  customerTypeList: CustomerType[] = [];
  createForm: FormGroup;
  regexpName: RegExp = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
  regexpIdCard: RegExp = /^\d{9}|\d{11}$/;
  regexpPhoneNumber: RegExp = /^(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})$/;
  regexpEmail: RegExp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
  constructor(private customerService: CustomerService, private router: Router) {
    this.customerService.getAllCustomerType().subscribe(date => {
      this.customerTypeList = date;
    }, error => {}, () => {} );
    console.log(this.customerTypeList.length);
    console.log(Date.now());
    this.createForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern(this.regexpName)]),
      gender: new FormControl('', Validators.required),
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
    const date = new Date(birthday.value);
    const age = differenceInYears(new Date(), date);
    return (age <= 18) ? {'more18age': true} : null;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    if (this.createForm.valid){
      this.customerService.saveCustomer(this.createForm.value).subscribe(date => {
        console.log(date);
        this.createForm.reset();
        alert('Thêm mới thành công');
        this.router.navigateByUrl('').then(r => {});
      }); }
    else {  alert('Submit thất bại'); }
  }


}
