import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staffattendance',
  templateUrl: './staffattendance.component.html',
  styleUrls: ['./staffattendance.component.css']
})
export class StaffattendanceComponent implements OnInit {
  date: Date = new Date();
  staffList: any[] = [];
  attendance: string[] = [];
  counter: number = 0;
  apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.attendance.length = 20;
    this.date = new Date();
    this.getStaffAttendance();
  }

  getStaffAttendance(): void {
    this.http.get<any[]>(`${this.apiUrl}/admin/stafflist`)
      .subscribe(
        data => {
          this.staffList = data;
          // Ensure attendance array is reset when staff list is fetched
          this.resetAttendanceArray();
        },
        error => {
          console.error('Error fetching staff attendance:', error);
        }
      );
  }

  updateAttendance(staff: any): void {
    let teachernm = staff.firstname + " " + staff.lastname;
    const staffattendance = {
      userid: staff.userid,
      date: this.date,
      teachername: teachernm,
      attendance: this.attendance[this.counter]
    }
    staff.date = this.date;
    console.log(staff);
    this.http.post(`${this.apiUrl}/savaattendance`, staffattendance)
      .subscribe(
        updatedStaff => {
          console.log('Attendance updated successfully:', updatedStaff);
          // Increment counter only if it's within bounds
          if (this.counter < this.attendance.length - 1) {
            this.counter++;
          }
        },
        error => {
          console.error('Error updating attendance:', error);
        }
      );
  }

  resetAttendanceArray(): void {
    // Reset the attendance array to match the number of staff members
    this.attendance = new Array(this.staffList.length).fill('');
    // Reset the counter
    this.counter = 0;
  }

  datechange(): void {
    // Reset attendance array and counter when date changes
    this.resetAttendanceArray();
  }
}
