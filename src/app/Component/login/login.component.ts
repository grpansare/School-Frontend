import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   heading:string="Student Login";
   teacher:string="disable";
   student:string="active"
   credentials:any={

  }
  loginform=new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
  })
  get email(): any {
    return this.loginform.get('email');
  }

  get password(): any {
    return this.loginform.get('password');
  }

   constructor(private loginservice:LoginService,private router:Router,private snak:MatSnackBar){


   }
   oncteacher(){
    this.heading="Teacher Login"
    this.teacher="active";
    this.student="disable"

   }
   onclick2(){
    this.heading="Student Login"
    this.teacher="disable";
    this.student="active"

   }
   onSubmit(){
    this.credentials=this.loginform.value;
   console.log(this.credentials)
    if((this.credentials.email!='' && this.credentials.password !='') && (this.credentials.email!=null && this.credentials.password!=null) ){
      console.log("not null")
      this.loginservice.login(this.credentials).subscribe(
        (response:any)=>{
          console.log("successful")
            console.log(response)
            if(response==''|| response==null){
              this.snak.open(" invalid username or passwrord !!","",{
                duration:3000,


              })
            }
            this.loginservice.loginuser(response.username)
            if(response.roleName=="ADMIN"){
                   this.router.navigateByUrl('admin');

            }
            else if(response.roleName=="Student"){
              console.log("in student if")
              const student = JSON.stringify(response);


              localStorage.setItem('studdata', student);
              localStorage.setItem("std",response.std)
              localStorage.setItem("studid",response.userid)

              this.router.navigateByUrl('student');

            }
            else if(response.roleName=="TEACHER"){

// Store in localStorage
              this.router.navigateByUrl('teacher');

            }

        },
        error=>{
          console.log(error)

        }
      )
  }else{
    this.router.navigateByUrl('/');
  }

  }

}
