import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  username:string = "";
  password:string = "";
  msg:string = "";
  loginStatus:boolean = false;


  

  login(){
    if(this.username === "admin" && this.password === "password"){
      //this.router.navigate(['/edit-emp']);
      this.authService.login();
      this.loginStatus = this.authService.isLoggedIn();
      this.router.navigate(['/employee-list']);
    }
    else{
      this.msg = "Inavlid Username/Password";
    }
  }

}
