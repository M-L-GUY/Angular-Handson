import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() employees:Employee[] = [
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

}
