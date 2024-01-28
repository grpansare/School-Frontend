import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent {
  stud!: any;
  formdata: any = '';
  student: any = null;
  updateddata:any="";

  data: any = {};
  fn:string='';
  baseurl="http://localhost:8081/admin/"

  constructor(private snack: MatSnackBar,private http:HttpClient
   ,private router:Router ) {
    this.stud = localStorage.getItem('studentinfo');
    this.student = JSON.parse(this.stud);
    console.log(this.student)

  }

  updatestudform = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    username: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(5)]),
    lastname: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{4,20}$/)]),
    address: new FormControl(null, Validators.required),
    contact: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    gender: new FormControl(null, Validators.required),
    std: new FormControl(null, Validators.required),
    birthdate: new FormControl(null, Validators.required),
  });

  get userid(): any {
    return this.updatestudform.get('userid');
  }

  get firstname(): any {
    return this.updatestudform.get('firstname');
  }

  get username(): any {
    return this.updatestudform.get('username');
  }

  get lastname(): any {
    return this.updatestudform.get('lastname');
  }

  get email(): any {
    return this.updatestudform.get('email');
  }

  get password(): any {
    return this.updatestudform.get('password');
  }

  get address(): any {
    return this.updatestudform.get('address');
  }

  get contact(): any {
    return this.updatestudform.get('contact');
  }

  get gender(): any {
    return this.updatestudform.get('gender');
  }

  get classname(): any {
    return this.updatestudform.get('std');
  }

  get dob(): any {
    return this.updatestudform.get('dob');
  }

  handleSubmit(userform: any): void {
    this.updateddata=this.updatestudform.value
   console.log(this.updateddata)
this.http.post(`${this.baseurl}updateStudent`,this.updateddata).subscribe(
  response=>{
    console.log(response)
    if(response==1){
      console.log(response)
      this.router.navigateByUrl("admin/Students")

    }
  },
  error=>{
    console.log(error)

  }
)
  }





  }



