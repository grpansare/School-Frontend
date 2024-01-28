import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrl: './addteacher.component.css'
})
export class AddteacherComponent {
  data: any = {};
  baseurl="http://localhost:8081/admin/addTeacher"
  constructor(private snack:MatSnackBar,private http:HttpClient){

  }
  userform = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    qualification: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]),
    contact: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    address: new FormControl(''),
    password: new FormControl(null, [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%*?&]).{4,20}$/)]),
    gender: new FormControl('', Validators.required),
  });

  get userid(): any {
    return this.userform.get('userid');
  }

  get firstname(): any {
    return this.userform.get('firstname');
  }

  get username(): any {
    return this.userform.get('username');
  }

  get lastname(): any {
    return this.userform.get('lastname');
  }

  get email(): any {
    return this.userform.get('email');
  }

  get pass(): any {
    return this.userform.get('pass');
  }

  get address(): any {
    return this.userform.get('address');
  }

  get contact(): any {
    return this.userform.get('contact');
  }

  get gender(): any {
    return this.userform.get('gender');
  }

  get classname(): any {
    return this.userform.get('std');
  }

  get dob(): any {
    return this.userform.get('dob');
  }

  handleSubmit(userform:any): void {
    this.data=this.userform.value;


    this.http.post(this.baseurl,this.data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response!=null){
          this.snack.open(" Teacher Successfully added !!","",{
            duration:3000,
          })
        }
      },
      error=>{
        console.log(error)

      }
    )


  }

  handleReset(): void {
    this.userform.reset();
  }
}
