import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentgrade',
  templateUrl: './studentgrade.component.html',
  styleUrl: './studentgrade.component.css'
})
export class StudentgradeComponent {
   gradedata:any='';


  constructor(private http: HttpClient) {}
  gradeForm = new FormGroup({
    studentname: new FormControl(null,[ Validators.required, ]),
    studid: new FormControl(null,[ Validators.required, ]),
    marathimarks: new FormControl(null, [Validators.required,]),
    englishmarks: new FormControl(null,[ Validators.required,]),
    sciencemarks: new FormControl(null, [Validators.required,]),
    mathsmarks: new FormControl(null, [Validators.required,]),
    ssmarks: new FormControl(null, Validators.required),

  });
  submitForm(): void {
console.log("in submit form")
 this.gradedata=this.gradeForm.value;
    this.http.post('http://localhost:8081/savegrades', this.gradedata)
      .subscribe(response => {
        console.log('Data saved successfully:', response);
        // Add any additional handling or redirection as needed
      }, error => {
        console.error('Error saving data:', error);
        // Handle error appropriately
      });
  }
}
