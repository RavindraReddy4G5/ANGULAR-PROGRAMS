import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentsComponent } from '../students.component';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  name = "";
  age="";
  roll="";
  address="";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveStudent(){
    let savedData = localStorage.getItem('students');
    let parsedStudents = [];
    if(savedData) {
      parsedStudents = JSON.parse(savedData);
    }
    let student = {
      name:this.name,
      age:this.age,
      roll:this.roll,
      address:this.address,
      id:parsedStudents ? parsedStudents.length+1 : 1
    }
    parsedStudents.push(student);
    localStorage.setItem('students',JSON.stringify(parsedStudents));
    this.router.navigate(['/students'])
  }

}
