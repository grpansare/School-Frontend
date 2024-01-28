import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentattendance',
  templateUrl: './studentattendance.component.html',
  styleUrl: './studentattendance.component.css'
})
export class StudentattendanceComponent {




  standard:number=0;


  date!: Date;
  studentList: any[] = [];


  attendance:string[]=[];
  counter:number=0;

  apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getStaffAttendance();
  }

  getStudentAttendance(): void {
    this.http.get<any[]>(`${this.apiUrl}/admin/`)
      .subscribe(

      );
  }


  getStudents(){
console.log("get students")

    this.http.get<any[]>(`${this.apiUrl}/admin/getstudentsbystd/${this.standard}`)
    .subscribe(
      data => {
        console.log(data)
        this.studentList = data;
      },
      error => {
        console.error('Error fetching staff attendance:', error);
      }
    );
  }

  updateAttendance(student: any): void {

   let studentnm= student.firstname+" "+student.lastname;
   const studentattendance={
        userid:student.userid,
        date:this.date,
        studentname:studentnm,
        attendance:this.attendance[this.counter]

    }
    student.date=this.date;
    console.log(student)
    this.http.post(`${this.apiUrl}/savastudentAttendance`,studentattendance )
      .subscribe(
        updatedStudent => {
          console.log('Attendance updated successfully:', updatedStudent);
          this.counter++;
        },
        error => {
          console.error('Error updating attendance:', error);
        }
      );
  }
}
