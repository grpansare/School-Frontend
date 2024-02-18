import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MdbModalRef, } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrl: './otp-modal.component.css'
})
export class OtpModalComponent {
  @Input() email: string | undefined;
  @Input() generatedOtp:string |undefined;
  verificationResult:string="";
 otp:any="";
 otpform=new FormGroup(
  {
    num1:new FormControl(null),
    num2:new FormControl(null),
    num3:new FormControl(null),
    num4:new FormControl(null),
    num5:new FormControl(null),
    num6:new FormControl(null),

  }
 )
  constructor(public modalRef: MdbModalRef<OtpModalComponent>) {}
  verify() {
this.otp=this.otpform.value;


     this.otp = this.otp.num1+this.otp.num2+this.otp.num3+this.otp.num4+this.otp.num5+this.otp.num6;

    console.log('OTP:', this.otp);

     if(this.otp==this.generatedOtp){

      this.verificationResult="Successfull";

      Swal.fire({
        title: "Verification Successful",
        icon: "success"
      });
      this.modalRef.close(this.verificationResult)

     }
  }
}
