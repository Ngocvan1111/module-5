import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer/customer-type';

@Component({
  selector: 'app-task27-them-moi-khach-hang',
  templateUrl: './task27-them-moi-khach-hang.component.html',
  styleUrls: ['./task27-them-moi-khach-hang.component.css']
})
export class Task27ThemMoiKhachHangComponent implements OnInit {
  customerTypeList: CustomerType[];
  createForm: FormGroup;
  regexpName: RegExp = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
  regexpIdCard: RegExp = /^\d{9}|\d{11}$/;
  regexpPhoneNumber: RegExp = /^(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})$/;
  regexpEmail: RegExp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
  constructor() {
    this.customerTypeList = [
      {id: 1, name: 'diamond'},
      {id: 2, name: 'Gold'},
      {id: 3, name: 'Sliver'},
      {id: 4, name: 'Member'},
    ];
    console.log(this.customerTypeList.length);
    console.log(Date.now());
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(this.regexpName)]),
      customerType: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required] ),
      idCard: new FormControl('', [Validators.required, Validators.pattern(this.regexpIdCard)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.regexpPhoneNumber)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.regexpEmail)]),
      address: new FormControl('', [Validators.required]),
    });
  }



  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    if (this.createForm.valid){
      alert('Submit thanh cong');
    }
    else {  alert('Submit thất bại'); }



  }

}
