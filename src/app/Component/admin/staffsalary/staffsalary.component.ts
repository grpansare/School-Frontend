import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffsalary',
  templateUrl: './staffsalary.component.html',
  styleUrls: ['./staffsalary.component.css'] // Corrected typo here
})
export class StaffsalaryComponent implements OnInit {
  salarydata: any = '';
  teachers: any[] = [];
  idarr: any[] = [];
  teachername: any = '';
  teacherId: any = '';

  constructor(private http: HttpClient, private router: Router, private snack: MatSnackBar) {}

  ngOnInit() {
    this.show();
  }

  private baseUrl: string = 'http://localhost:8081/admin/viewTeachers';

  show() {
    this.http.get<any[]>(this.baseUrl).subscribe(
      (success: any) => {
        console.log('Teachers fetched successfully:', success);
        this.teachers = success;
        this.getIds();
        this.getTeacherName();
      },
      (error: any) => {
        alert('Error fetching teachers: ' + error);
        console.error('Error fetching teachers:', error);
      }
    );
  }

  salaryForm = new FormGroup({
    teacherid: new FormControl(null, Validators.required),
    teacherName: new FormControl(null, Validators.required),
    salary: new FormControl(null, Validators.required),
  });

  get teacherid(): any {
    return this.salaryForm.get('teacherid');
  }

  get teacherName(): any {
    return this.salaryForm.get('teacherName');
  }

  get salary(): any {
    return this.salaryForm.get('salary');
  }

  submitForm() {
    const formData = this.salaryForm.value;
    console.log(formData);
    this.http.post('http://localhost:8081/staffsalary/add', formData).subscribe(
      (response) => {
        console.log('Salary data submitted successfully:', response);
        this.snack.open('Salary updated successfully!!', '', {
          duration: 3000,
        });
      },
      (error) => {
        console.error('Error submitting salary data:', error);
      }
    );
  }

  getIds() {
    this.idarr = [];
    this.teachers.forEach((teacher) => {
      this.idarr.push(teacher.userid);
    });
  }

  getTeacherName() {
    this.teacherid.valueChanges.subscribe((selectedId: any) => {
      const selectedTeacher = this.teachers.find((teacher) => teacher.userid === selectedId);

      if (selectedTeacher) {
        this.teacherName.setValue(`${selectedTeacher.firstname} ${selectedTeacher.lastname}`);
      } else {
        this.teacherName.setValue(null);
      }
    });
  }
}
