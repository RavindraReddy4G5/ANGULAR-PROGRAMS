import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password="";

  constructor(private router: Router) { 
    this.email = "";
    this.password = "";
  }

  ngOnInit() {
  }

  login(){
    let users = localStorage.getItem('users');
    let parsedUsers = JSON.parse(users);
    let loggedUser = parsedUsers.filter((user)=>{
      console.log(user.email,user.password);
      return user.email==this.email && user.password==this.password
    })
    if(loggedUser.length>0){
      console.log("log in sucess")
      this.router.navigate(['/dashboard']);
    }else{
      console.log("log in failed")
    }

    // if((parsedUsers && parsedUser.email === this.email) && (parsedUser && parsedUser.password === this.password)) {
    //   console.log("log in sucess")
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   console.log("log in failed")
    // }
  }


}
