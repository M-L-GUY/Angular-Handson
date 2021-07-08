import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  
  quantity:number = 0;
  btnDisabled = true;
  
  
  inc(){
  	this.btnDisabled = false;
  	this.quantity = this.quantity + 1;
  	return this.quantity;
  }
  
  dec(){
  	if(this.quantity == 1){
  		this.btnDisabled = true;
  	}
  	if(this.quantity > 0){
  		this.quantity = this.quantity - 1;
  	}
  	
  	return this.quantity;
  }
  
  

}
