
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-staffsalary',
  templateUrl: './staffsalary.component.html',
  styleUrl: './staffsalary.component.css'
})
export class StaffsalaryComponent {
  salarydata:any='';


  constructor( private http: HttpClient,private snak:MatSnackBar) {

    };
    salaryForm = new FormGroup({
      teacherid: new FormControl(null, Validators.required),
      teacherName: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
    })
    get teacherid(): any {
      return this.salaryForm.get('teacherid');
    }
    get teacherName():any{
      return this.salaryForm.get("teacherName");
    }
    get salary():any{
      return this.salaryForm.get("salary");

    }
  submitForm() {
    const formData = this.salaryForm.value;
     console.log(formData)
    this.http.post('http://localhost:8081/staffsalary/add', formData)
      .subscribe(response => {
        console.log('Salary data submitted successfully:', response);
        this.snak.open(" salary updated successfully!!","",{
          duration:3000,
        })
      }, error => {
        console.error('Error submitting salary data:', error);
      });
  }



}
