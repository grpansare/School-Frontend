import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myattendance',
  templateUrl: './myattendance.component.html',
  styleUrl: './myattendance.component.css'
})
export class MyattendanceComponent {
attendanceArr:any=[];
userid!:any;
constructor(private http:HttpClient){
this.userid=localStorage.getItem("userid");
this.userid=Number.parseInt(this.userid);
this.getStaffAttendance();
}
apiUrl = 'http://localhost:8081';;
getStaffAttendance(): void {
  this.http.get<any[]>(`${this.apiUrl}/getAttendance/${this.userid}`)
    .subscribe(
      data => {

         this.attendanceArr=data;
      },
      error => {
        console.error('Error fetching staff attendance:', error);
      }
    );
}
}
