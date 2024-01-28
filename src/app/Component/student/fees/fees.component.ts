import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var Razorpay:any;




@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent {
  studentFeesForm: FormGroup;
  studdata:any='';
  formdata:any=';'



  constructor(private formBuilder: FormBuilder, private http: HttpClient,private snak:MatSnackBar) {
    this.studentFeesForm = this.formBuilder.group({
      feetype: ['', Validators.required],
      amount: ['', Validators.required],

    });

  }

  startPayment(amt:any){
    console.log("payment  started..");
    // let amount=$("#payment_field").val();
    alert(amt);
    if(amt=='' || amt==null){
        alert("amount required ||");
        return;
    }
  }



  onSubmit(amt:any) {
alert(amt)
this.http.get(`http://localhost:8081/createTransaction/${amt}`).subscribe(
  (response)=>{

    console.log("response"+response)
    this.openTransactionModal(response)
  },
  (error)=>{
    console.log(error)
  }
)
//     this.studdata = localStorage.getItem('studdata');
// this.formdata=this.studentFeesForm.value;

//     const student = JSON.parse(this.studdata);
//   const studentfee={
//     userId:student.userid,
//     studentName:student.firstname,
//     fees:this.formdata.amount,
//     feetype:this.formdata.feetype
//   }

//     if (this.studentFeesForm.valid) {
//       const formData = this.studentFeesForm.value;
//       this.http.post<any>(`http://localhost:8081/student-fees/add`, studentfee)
//         .subscribe(
//           (response) => {
//             this.studentFeesForm.reset()
// this.snak.open("Fees paid successfully ","",{
//   duration:3000
// })
//             console.log('Fees submitted successfully!', response);
//           },
//           (error) => {
//             console.error('Error submitting fees:', error);
//           }
//         );
//     } else {
//       console.log('Please fill in all required fields.');
//     }
//   }
  }


  openTransactionModal(response:any){
    console.log(response.key)
    var options={
      order_id:response.orderId,
      key:response.key,
      amount:response.amount,
      currency:response.currency,
      name:"student fee",
      description:"Student Fee",
      image:"https://www.shutterstock.com/image-vector/indian-republic-day-celebrations-26th-260nw-1898161372.jpg",
      handler:(response:any)=>{
             this.processResponse(response);
      },
      prefill:{
        name:"school fee",
        email:"school@gmail.com",
        contact:"7897979"
      },
      notes:{
        address:"EduSyncPlus"
      },
      theme:{
        color:"#F37254"
      }
    };
    var razorpayObject=new Razorpay(options);
    razorpayObject.open();
  }
  processResponse(resp:any){
    console.log(resp)
  }
}
