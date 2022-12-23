
import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  calculator: Calculator = {
    firstNumber: '0',
    secondNumber: '0',
    result: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  getResult(s: string): void {
    this.calculator.result = eval(this.calculator.firstNumber + s + this.calculator.secondNumber);
  }
}
