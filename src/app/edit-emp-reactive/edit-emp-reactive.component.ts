import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeeService : EmployeeService) { }

  // emp:Employee={
  //         id: 3,
  //         name: "Ram",
  //         salary: 10000,
  //         permanent: true,
  //         department: {id:1,name:"Payroll"},
  //         skill: [{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
  //         dateOfBirth: new Date("12/31/2000")
  // };

  empId:string = '';

  ngOnInit(): void {
    this.empId = JSON.parse(this.route.snapshot.paramMap.get('id') || '{}');
    // this.emp = this.employeeService.getEmployee(parseInt(empId));
  }

  emp:Employee = this.employeeService.getEmployee(parseInt(this.empId));

  departments:Department[] = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];

  empForm = new FormGroup({
    name : new FormControl(this.emp.name,[
      Validators.required,
      ]),
    salary: new FormControl(this.emp.salary, [Validators.required]),
    permanent: new FormControl(this.emp.permanent),
    department: new FormControl(this.emp.department)

  });

  get name() { return this.empForm.get('name'); }

  get salary() { return this.empForm.get('salary'); }

  get permanent() { return this.empForm.get('permanent'); }

  get department() { return this.empForm.get('department'); }

  onSubmit(){
    console.log(this.empForm.value);
    console.log(this.emp);
  }


}
