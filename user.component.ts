import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // ngOnInit() {
    
  // }
  // user ={}
  // buttonCliked = true;
  // age =20;
  // selectedUser = {};
  // selectedIndex = 0;
  show = true;



  users = [
    {
      id:1,
      name:'test1',
      age:20,
      payment:false
    },
    {
      id:2,
      name:'test2',
      age:17,
      payment:false
    }
  ]
   constructor() { }

  ngOnInit() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }


  // saveData(){
  //   console.log("here inside saveData",this.age);
  // }

  // getUserById(index,user){
  //   console.log(index,user);
  //   this.user = user;
  //   this.selectedIndex = index;

  // }

  // updateUser(){
  //   this.users[this.selectedIndex].name = this.user.name;
  //   this.users[this.selectedIndex].age = this.user.age;
  //   this.users[this.selectedIndex].id = this.user.id;
  // }

}

