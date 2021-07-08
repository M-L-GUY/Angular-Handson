import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

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

}
