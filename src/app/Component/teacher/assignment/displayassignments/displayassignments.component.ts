import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayassignments',
  templateUrl: './displayassignments.component.html',
  styleUrl: './displayassignments.component.css'
})
export class DisplayassignmentsComponent {
  assignmentArr: any[] = []


  constructor(private http: HttpClient, private router: Router) {
    this.show();
  }
  private baseUrl: any = 'http://localhost:8081/viewassignment';

  show() {
    this.http.get<any[]>(this.baseUrl).subscribe(
      sucess => {
        console.error('student added successfully:', sucess);
        this.assignmentArr = sucess;
      },
      error => {
        alert("Error Student not found:" + error);
        console.error('Error student not found:', error);
      }

    );


  }


onClick(){
  this.router.navigateByUrl('newAssignment');
  alert("hey")
}


}
