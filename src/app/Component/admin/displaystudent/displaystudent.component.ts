import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-displayall',
  templateUrl: './displaystudent.component.html',
  styleUrl: './displaystudent.component.css'
})
export class DisplaystudentComponent {

  studArr: any[] = []
  pageSize = 8;
  currentPage = 1;

  constructor(private http: HttpClient, private router: Router) {
    this.show();
  }
  private baseUrl: any = 'http://localhost:8081/admin/viewStudent';

  show() {
    this.http.get<any[]>(this.baseUrl).subscribe(
      sucess => {
        console.error('student added successfully:', sucess);
        this.studArr = sucess;
      },
      error => {
        alert("Error Student not found:" + error);
        console.error('Error student not found:', error);
      }

    );


  }

  get displayStudents(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.studArr.slice(startIndex, endIndex);
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
  updateStudent(stud: any) {


    const student = JSON.stringify(stud);

    // Store in localStorage
    localStorage.setItem('studentinfo', student);
    this.router.navigateByUrl('admin/updatestudent');
  }
}
