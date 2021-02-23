import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
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
  filteredUser: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data);
      this.filteredUser= this.users.filter((user) => {
        console.log(user,data)
        return user.id === Number(data.id);
      });
    });
    console.log(this.filteredUser);
  }

}
