import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  msg:string = "";
  constructor() {
  	
   }

  ngOnInit(): void {
  }
  
  clickme(){
  	this.msg="Click me button clicked!";
  	return this.msg;
  	
  }
  
  num:number = 0;
  add(){
  	this.num = this.num + 1;
  	return this.num;
  }

}
