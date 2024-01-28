import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrl: './new-exam.component.css'
})
export class NewExamComponent {
  baseUrl="http://localhost:8081";
  examinfo:any='';
  constructor(private http:HttpClient,private router:Router){

  }
  newexamform = new FormGroup({
    std: new FormControl(null,[ Validators.required, ]),
  subject: new FormControl(null, [Validators.required, ]),
    examdate: new FormControl(null,[ Validators.required,]),
})
handleSubmit(){
this.examinfo=this.newexamform.value;
this.http.post(`${this.baseUrl}/saveexam`,this.examinfo).subscribe(
  (response:any)=>{
    console.log("successful")
      console.log(response)
      this.router.navigateByUrl('admin/exam');

  },
  error=>{
    console.log(error)

  }

)

}
}
