import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginData} from '../login-data';
import {LoginserviceService} from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginDate: LoginData[] = [];

  loginForm: FormGroup;
  constructor(private loginserviceService: LoginserviceService) {
  this.loginDate = loginserviceService.getAll();
  console.log(this.loginDate);
  console.log(this.loginDate.length);
  this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }, this.check);
  }
  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  check(loginForm: any){
    const us = loginForm.controls.userName.value;
    const pw = loginForm.controls.password.value;
    console.log(this.loginDate.length);
    // tslint:disable-next-line:prefer-for-ofy
    // for (let i = 0; i < this.loginDates.length; i++){
    if ('admin' === us && 'admin123' === pw){
        return null;
    }
    return {'invalidc': true};
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.loginForm.valid){
      alert('Login thành công');
    }else { alert('Login thất bại'); }

  }

}
