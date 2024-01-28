import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduledexams',
  templateUrl: './scheduledexams.component.html',
  styleUrl: './scheduledexams.component.css'
})
export class ScheduledexamsComponent {
  exams:any[]=[];
  displaybtn:boolean=true;
  displayexams:boolean=true;
  baseUrl="http://localhost:8081";
       constructor(private http:HttpClient,private router:Router){
               this.displayexams=true;
               this.displaybtn=true;
              this.getAllExams();
       }
       public getAllExams(){
        this.http.get(`${this.baseUrl}/getExams`).subscribe(
          (response:any)=>{
                this.exams=response;
              console.log(response)
          },
          error=>{
            console.log(error)

          }
        )
       }
       onexam(){
this.displaybtn=false;

this.displayexams=false;
this.router.navigateByUrl('admin/exam/newexam');
       }
}
