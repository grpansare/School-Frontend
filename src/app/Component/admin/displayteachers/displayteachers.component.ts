import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayteachers',
  templateUrl: './displayteachers.component.html',
  styleUrls: ['./displayteachers.component.css'] // Corrected styleUrls
})
export class DisplayteachersComponent implements OnInit {
  teachers: any[] = [];

  constructor(private http: HttpClient,private router:Router) {} // Inject HttpClient here

  ngOnInit() {
    this.show();
  }

  private baseUrl: string = 'http://localhost:8081/admin/viewTeachers';

  show() {
    this.http.get<any[]>(this.baseUrl).subscribe(
      (success: any) => {
        console.log('Teachers fetched successfully:', success);
        this.teachers = success;
      },
      (error: any) => {
        alert('Error fetching teachers: ' + error);
        console.error('Error fetching teachers:', error);
      }
    );
  }
  updateTeacher(teacher: any) {


    const teacher1 = JSON.stringify(teacher);

    // Store in localStorage
    localStorage.setItem('teacher', teacher1);
    this.router.navigateByUrl('admin/updateteacher');
  }
}
