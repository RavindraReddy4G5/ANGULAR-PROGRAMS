import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminsUsers = [
    {
      id:1,
      name:'test1',
      age:20,
      role:'admin',
      payment:false
    },
    {
      id:2,
      name:'test2',
      age:17,
      role:'admin',
      payment:false
    }
  ]

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(data => {
      console.log(data);
    });
  }
  
  moveToAdd(){
    this.router.navigate(['/admin/admin-edit']);
  }

}
