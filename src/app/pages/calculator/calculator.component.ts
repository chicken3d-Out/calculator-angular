import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNo: string = "";
  secondNo: string = "";

  operation:string = "";
  answer!: Number;

  constructor() { }

  addition(){
    this.answer = parseInt(this.firstNo) + parseInt(this.secondNo)

    this.operation = 'Sum'

  }
  subtraction(){
    this.answer = parseInt(this.firstNo) - parseInt(this.secondNo)

    this.operation = 'Difference'
  }
  multiplication(){
    this.answer = parseInt(this.firstNo) * parseInt(this.secondNo)

    this.operation = 'Product'
  }
  division(){
    this.answer = parseInt(this.firstNo) / parseInt(this.secondNo)

    this.operation = 'Qoutient'
  }

  clear(){
    this.operation = ''
    this.answer = 0
  }
  ngOnInit(): void {
  }

}
