import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
  baseurl="http://localhost:8081/admin/studentcount"
  numberofstudents!:any;
constructor(private http:HttpClient){

}
getnumberofstudents(){
  this.http.get(`${this.baseurl}`).subscribe(
    (response:any)=>{
      this.numberofstudents=response;

    },
    error=>{
      console.log(error)

    }
  )

}
}
