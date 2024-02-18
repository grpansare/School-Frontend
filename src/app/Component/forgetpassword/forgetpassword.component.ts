import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core'; // Corrected import statement
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { OtpModalComponent } from '../otp-modal/otp-modal.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'] // Corrected styleUrl to styleUrls
})
export class ForgetpasswordComponent {
  @ViewChild('content') content!: TemplateRef<any>; // Added ViewChild decorator
  emailData!: string;
  formdata: any = "";
  closeResult = '';
  generatedOtp:any="";
  showNewPassword:boolean=false;
  newPasswordForm: FormGroup;

  modalRef: MdbModalRef<OtpModalComponent> | null = null;

  newdesc:String="We'll ask for this password whenever you Sign-In.";

  constructor(private router: Router, private http: HttpClient,
    private modalService: MdbModalService,
    private formBuilder: FormBuilder
    ) {
      this.newPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8), /* Add your pattern validator here */]],
        confirmpass: ['', Validators.required]
      });
  }

  forgotPasswordForm = new FormGroup({
    emailData: new FormControl(null, [Validators.required]),
  })



  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.forgotPasswordForm || !this.forgotPasswordForm.get('password')) {
      console.error('Form or password control not initialized.');
      return { 'passwordMismatch': true };
    }

    const password = this.forgotPasswordForm.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }







  get password():any{
    return this.forgotPasswordForm.get('password');
  }

  get confirmpass():any{
    return this.forgotPasswordForm.get('confirmpass');
  }

  sendOtp() {

    this.formdata = this.forgotPasswordForm.value;

    this.http.post("http://localhost:8081/sendOtp", this.formdata.emailData).subscribe( // Sending email as an object
      response => {
        console.log(response);
        if (response !== 0) {
          this.generatedOtp=response;

          this.openModal()
          // this.Otppage=true;
        }
      },
      error => {
        console.log(error);
      }
    );

    // this.Otppage=true;
  }
  openModal() {

    this.modalRef = this.modalService.open(OtpModalComponent, {
      data: {email:this.formdata.emailData,generatedOtp:this.generatedOtp},
      modalClass: 'modal-lg'
    });
    this.modalRef.onClose.subscribe((message: any) => {

      this.showNewPassword=true;
    });


  }
  updatePassword(password:any){

    const formData=new FormData();
    formData.append("email",this.formdata.emailData);
    formData.append("password",password);




     alert(password)
     this.http.post("http://localhost:8081/updatepassword",formData).subscribe(
      (success:any)=>{
        console.log("Password Updated");
        if(success>0){
          Swal.fire({
            title: "Password Updated Successfuly",
            icon: "success"
          });
          this.router.navigateByUrl('studteacherlogin')    ;
        }

      },
      error=>{
        console.log(error);

      }
     )

  }

  }



