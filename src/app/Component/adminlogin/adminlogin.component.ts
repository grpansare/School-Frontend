import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  heading:string="Admin Login";

  credentials={
   email:'',
   password:''
 }

  constructor(private loginservice:LoginService){


  }

  onSubmit(form:NgForm){
   this.credentials=form.value;
  console.log(this.credentials)
   if((this.credentials.email!='' && this.credentials.password !='') && (this.credentials.email!=null && this.credentials.password!=null) ){
     console.log("not null")
     this.loginservice.login(this.credentials).subscribe(
       (response:any)=>{
         console.log("successful")
           console.log(response)
           this.loginservice.loginuser(response.username)

           window.location.href="/admin"

       },
       error=>{
         console.log(error)

       }
     )
 }else{
   console.log("fields are empty")
 }

 }
}
