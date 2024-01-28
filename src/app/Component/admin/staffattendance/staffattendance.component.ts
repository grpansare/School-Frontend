

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staffattendance',
  templateUrl: './staffattendance.component.html',
  styleUrls: ['./staffattendance.component.css']
})
export class StaffattendanceComponent implements OnInit {
  date!: Date;
  staffList: any[] = [];


  attendance:string[]=[];
  counter:number=0;

  apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStaffAttendance();
  }

  getStaffAttendance(): void {
    this.http.get<any[]>(`${this.apiUrl}/admin/stafflist`)
      .subscribe(
        data => {

          this.staffList = data;
        },
        error => {
          console.error('Error fetching staff attendance:', error);
        }
      );
  }

  updateAttendance(staff: any): void {

   let teachernm= staff.firstname+" "+staff.lastname;
   const staffattendance={
        userid:staff.userid,
        date:this.date,
        teachername:teachernm,
        attendance:this.attendance[this.counter]

    }
    staff.date=this.date;
    console.log(staff)
    this.http.post(`${this.apiUrl}/savaattendance`,staffattendance )
      .subscribe(
        updatedStaff => {
          console.log('Attendance updated successfully:', updatedStaff);
          this.counter++;
        },
        error => {
          console.error('Error updating attendance:', error);
        }
      );
  }
}
