import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

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

  empForm = this.fb.group({
    name: [this.emp.name, Validators.required],
    salary: [this.emp.salary, Validators.required],
    permanent: [this.emp.permanent],
    department: [this.emp.department],
    skills: this.fb.array([
      this.fb.control(this.emp.skill)
      ])
  });


  get name() { return this.empForm.get('name'); }

  get salary() { return this.empForm.get('salary'); }

  get permanent() { return this.empForm.get('permanent'); }

  get department() { return this.empForm.get('department'); }

  get skills() {
    return this.empForm.get('skills') as FormArray;
  }


  addSkill(){
    this.skills.push(this.fb.control(''));
  }


  onSubmit(){
    console.log(this.empForm.value);
  }

}
