import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Register} from "../register";
import {Country} from "../country";
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  countryList: Country[] = [
    {id: '1',name: 'Việt Nam'},
    {id: '2',name: 'Lào'},
    {id: '3',name: 'Campuchia'},
  ]
  lists: Register[] = [
    {email: 'laivanngoc@gmail.com',
      password: 'laivanngoc',
      confirmPassword: 'laivanngoc',
      country: {id: '1',name: 'Việt Nam'},
      age: 20,
      gender: true,
      phone: '0393090815'
    }
  ];
  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup( {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      age: new FormControl('',[Validators.required, this.checkAge]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.required, Validators.pattern('[+][8][4][0-9]{9,10}')])
    }, this.mustMatch)
  }
  ngOnInit(): void {
  }
  mustMatch(contactForm: any){
      const password = contactForm.controls.password.value;
      const conPassword = contactForm.controls.confirmPassword.value;
      console.log("psw"+password);
      console.log("cpsw"+conPassword);
      if(password != conPassword) {
        console.log("ok")
        return {"invalidConformPassword": true}
      }
      return null;
  }
  checkAge(age: AbstractControl){
    console.log(age);
    if(age.value < 18){
      return {"agecheck": true}
    }
    return null;
  }

  onSubmit(){
    console.log(this.contactForm.value.country);
    if(this.contactForm.valid){
      for (let i = 0; i< this.countryList.length; i++){
        if(this.countryList[i].id == this.contactForm.value.country ){
          console.log("test id" + i);
          this.contactForm.value.country = this.countryList[i]

        }
      }
      console.log(this.contactForm.value.country);
      this.lists.push(this.contactForm.value)
    }else {
      alert("Thêm mới thất bại");
    }

  }

}
