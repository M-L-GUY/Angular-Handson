import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  emp:Employee={
          id: 3,
          name: "John",
          salary: 10000,
          permanent: true,
          department: {id:1,name:"Payroll"},
          skill: [{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
          dateOfBirth: new Date("12/31/2000")
  };
  
  departments:Department[] = [
	{ id: 1, name: "Payroll" },
	{ id: 2, name: "Internal" },
	{ id: 3, name: "HR" }
  ];
  
  onSubmit(){
  	console.log(this.emp);
  }
  

}
