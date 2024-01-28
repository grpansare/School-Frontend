import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrl: './student-exams.component.css'
})
export class StudentExamsComponent {
  apiUrl = 'http://localhost:8081';
  std:any=localStorage.getItem('std');
  exams:any[]=[];

 constructor(private http:HttpClient,private router:Router){
 this.getStudentExams();
 }

 getStudentExams(){
  console.log(this.std);
  this.http.get(`${this.apiUrl}/getStudentExams/${this.std}`).subscribe(

    (response:any)=>{
      console.log("successful")
        console.log(response)
       this.exams=response;

    },
    error=>{
      console.log(error)

    }
  )

 }
 startexam(subject:any){
this.router.navigate(['student/attemptexam', subject]);
 }
}
