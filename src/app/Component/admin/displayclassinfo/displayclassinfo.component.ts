import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayclassinfo',
  templateUrl: './displayclassinfo.component.html',
  styleUrl: './displayclassinfo.component.css'
})
export class DisplayclassinfoComponent {
  constructor(private route: ActivatedRoute,private http:HttpClient) {}
  classno!:any;
  classinfo:any='';
  studentsarr!:any[];

  ngOnInit(): void {

       this.classno=localStorage.getItem("classno");
        this.http.get(`http://localhost:8081/admin/getclass/${this.classno}`).subscribe(
          (response:any)=>{
            console.log(response)
            this.classinfo=response.data;
            this.studentsarr=response.students;


            }
          ,
          (error)=>{
            console.log(error)

          }
        )


    };



}



