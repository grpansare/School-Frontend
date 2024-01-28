import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { StudentService } from '../../../Services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent{
  data: any = {};
  constructor(private studentservice:StudentService,private snack:MatSnackBar){

  }
  addstudform = new FormGroup({
    firstname: new FormControl(null,[ Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    username: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(5)]),
    lastname: new FormControl(null,[ Validators.required,Validators.pattern(/^[A-Z][a-z]*$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{4,20}$/)]),
    address: new FormControl(null, Validators.required),
    contact: new FormControl(null,[ Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
    gender: new FormControl(null, Validators.required),
    std: new FormControl(null, Validators.required),
    birthdate: new FormControl(null, Validators.required),
  });

  get userid(): any {
    return this.addstudform.get('userid');
  }

  get firstname(): any {
    return this.addstudform.get('firstname');
  }

  get username(): any {
    return this.addstudform.get('username');
  }

  get lastname(): any {
    return this.addstudform.get('lastname');
  }

  get email(): any {
    return this.addstudform.get('email');
  }

  get password(): any {
    return this.addstudform.get('password');
  }

  get address(): any {
    return this.addstudform.get('address');
  }

  get contact(): any {
    return this.addstudform.get('contact');
  }

  get gender(): any {
    return this.addstudform.get('gender');
  }

  get classname(): any {
    return this.addstudform.get('std');
  }

  get dob(): any {
    return this.addstudform.get('dob');
  }

  handleSubmit(userform:any): void {
    this.data=this.addstudform.value;
    console.log("in submit")

    this.studentservice.addstudent(this.data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response!=null){
          this.snack.open(" Student Successfully added !!","",{
            duration:3000,
          })
          this.addstudform.reset();

        }
      },
      error=>{
        console.log(error)

      }
    )


  }

  handleReset(): void {
    this.addstudform.reset();
  }
}
