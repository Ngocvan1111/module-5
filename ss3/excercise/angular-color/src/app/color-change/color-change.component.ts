import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {
  bgColor='yellow';
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(s:string){
    this.bgColor=s;
  }

}
