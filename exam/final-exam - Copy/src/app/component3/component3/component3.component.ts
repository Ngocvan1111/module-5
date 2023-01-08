import { Component, OnInit } from '@angular/core';
import {differenceInYears} from 'date-fns';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  customerTypeList: CustomerType[] = [];
  customer: Customer = {id: 0, customerType: {id: 0, name: ''}, name: ''};
  // @ts-ignore
  editForm: FormGroup = new FormGroup({});
  regexpName: RegExp = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
  regexpIdCard: RegExp = /^\d{9}|\d{11}$/;
  regexpPhoneNumber: RegExp = /^(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})$/;
  regexpEmail: RegExp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.customerService.getAllCustomerType().subscribe(date => {
      this.customerTypeList = date;
    }, error => {}, () => {});
    // lây thông tin id từ customerlist //
    this.activatedRoute.paramMap.subscribe(date => {
      // @ts-ignore
     const id = date.get('id');
     console.log(id);
     if (id != null) {
        // @ts-ignore
        // tslint:disable-next-line:radix
        this.customerService.findById(parseInt(id)).subscribe(data => {
          this.customer = data;
          this.editForm = new FormGroup({
            id: new FormControl([this.customer?.id], Validators.required),
            name: new FormControl([this.customer?.name], [Validators.required, Validators.pattern(this.regexpName)]),
            gender: new FormControl([this.customer?.gender], Validators.required),
            customerType: new FormControl(this.customer?.customerType, [Validators.required]),
            dateOfBirth: new FormControl(this.customer.dateOfBirth, [Validators.required, this.validateOfBirthday] ),
            idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern(this.regexpIdCard)]),
            phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.required, Validators.pattern(this.regexpPhoneNumber)]),
            email: new FormControl(this.customer.email, [Validators.required, Validators.pattern(this.regexpEmail)]),
            address: new FormControl(this.customer.address, [Validators.required]),
          });
          console.log(this.customer);
        }, error => {}, () => {});
      }
    });
  }
  ngOnInit(): void {

  }
  validateOfBirthday(birthday: AbstractControl) {
    const date = new Date(birthday.value);
    const age = differenceInYears(new Date(), date);
    return (age <= 18) ? {more18age: true} : null;
  }
  compareFn(c1: Customer, c2: Customer): boolean {
    return c1.id === c2.id;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    if (this.editForm.valid){
      this.customerService.edit(this.editForm.value.id, this.editForm.value).subscribe(date => {
        console.log(this.editForm.value.id);
        console.log(this.editForm.value);
      });
      alert('Submit thanh cong');
      this.router.navigateByUrl('task25-danh-sach-khach-hang').then(r => {});
    }
    else {  alert('Submit thất bại'); }
  }

}
