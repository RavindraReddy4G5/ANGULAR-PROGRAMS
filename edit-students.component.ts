import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {
  currentStudent = {}
  students = [];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let students = localStorage.getItem('students');
    this.students = JSON.parse(students);
    this.route.params.subscribe(data => {
      console.log(data);
      this.filteredStudents= this.students.filter((student) => {
        return student.id === Number(data.id);
      });
    });
    this.currentStudent = this.filteredStudents[0];
  }

  updateStudent(){
    //this.students.push(this.currentStudent);
    let updateIndex;
    for(let i =0;i<this.students.length;i++){
      if(this.students[i].id===this.currentStudent.id) {
        updateIndex = i;
        break;
      }
    }
    this.students[updateIndex] = this.currentStudent;
    localStorage.setItem('students',JSON.stringify(this.students));
    this.router.navigate(['/students'])
  }
}
