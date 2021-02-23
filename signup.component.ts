import { Component, OnInit, LOCALE_ID } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email="";
  password = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup(){

    let users = localStorage.getItem('users');
    let parsedUsers = JSON.parse(users);
    let user = {
      email:this.email,
      password:this.password,
      role:'admin',
      id: parsedUsers ? parsedUsers.length+1 : 1
    }

    //for first time null breaker condition
    if(parsedUsers) {
      parsedUsers.push(user);
    }else {
      parsedUsers = [];
      parsedUsers.push(user);
    }
    localStorage.setItem('users', JSON.stringify(parsedUsers));
    this.router.navigate(['/login']);

  }

}


