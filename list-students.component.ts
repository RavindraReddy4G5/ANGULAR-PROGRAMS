import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students = [];
  constructor(private router: Router) { 
  }

  ngOnInit() {
    let students = localStorage.getItem('students');
    this.students = JSON.parse(students);
  }

  goToAddStudent(){
    this.router.navigate(['/students/add-student']);
  }

  goToEditStudent(id){
    this.router.navigate(['/students/edit-student',id]);
  }

  deleteStudent(id){
    this.students = this.students.filter(function(student){
      return student.id!=id
    })
    localStorage.setItem('students',JSON.stringify(this.students))
  }

}
