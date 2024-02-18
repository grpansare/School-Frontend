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
  pageSize = 8;
  currentPage = 1;

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
  get displayTeachers(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.teachers.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    // this.scrollToTop();
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: { page: this.currentPage },
    //   queryParamsHandling: 'merge',
    // });
  }
  updateTeacher(teacher: any) {


    const teacher1 = JSON.stringify(teacher);

    // Store in localStorage
    localStorage.setItem('teacher', teacher1);
    this.router.navigateByUrl('admin/updateteacher');
  }
}
