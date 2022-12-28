import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginData} from '../login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDates: LoginData[];

  loginForm: FormGroup;
  constructor() {
    this.loginDates = [
      {userName: 'laivanngoc', password: 'ngocvan1'},
      {userName: 'dangthinhi', password: 'nhidang1'},
      {userName: 'hoviettrung', password: 'viettrung1'},
    ];
    console.log(this.loginDates);
    console.log(this.loginDates.length);
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
    // tslint:disable-next-line:prefer-for-of
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
