import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees:Employee[] = [
  {id:1, name:"John", salary:10000, permanent:true, department:{id:1, name:"Payroll"}, 
  skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}], dateOfBirth: new Date("12/31/2000")},

  {id:2, name:"Smith", salary:5000, permanent:true, department:{id:1, name:"Payroll"}, 
  skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}], dateOfBirth: new Date("02/28/2000")},
  
  {id:3, name:"Mark", salary:5000, permanent:false, department:{id:2, name:"Internal"}, 
  skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}], dateOfBirth: new Date("05/24/2005")},
  
  {id:4, name:"Jerry", salary:5000, permanent:true, department:{id:1, name:"Payroll"}, 
  skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}], dateOfBirth: new Date("06/15/2002")},
  
  {id:1, name:"Mary", salary:50000, permanent:true, department:{id:3, name:"HR"}, 
  skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}], dateOfBirth: new Date("08/01/1999")},

];

searchKey = "";
eventValue = "";
filteredEmployees:Employee[] = [];

search(event:any){
  //console.log(event.target.value);
  this.eventValue = event.target.value;
  this.filteredEmployees = this.employees.filter(str => str.name.toLowerCase().includes(this.eventValue.toLowerCase()));

}

}
