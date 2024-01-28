import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-displaygrades',
  templateUrl: './displaygrades.component.html',
  styleUrl: './displaygrades.component.css'
})
export class DisplaygradesComponent {
  studid!:any;
  grades!:any;
  constructor(private http:HttpClient){
  this.studid=localStorage.getItem("studid");
  console.log(this.studid)
this.getGrades()
  }
  getGrades(){
    this.http.get(`http://localhost:8081/getStudentGrades/${this.studid}`).subscribe(
      success=>{
        console.log(success)
        this.grades=success;
      },
      error=>{
        console.log(error)
      }
    )
  }
}
