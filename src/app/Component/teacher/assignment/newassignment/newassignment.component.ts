import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newassignment',
  templateUrl: './newassignment.component.html',
  styleUrl: './newassignment.component.css'
})
export class NewassignmentComponent {
  selectedFile!:any;
  formData:any={};
  AssignmentForm=new FormGroup({
    std: new FormControl(null,),
    subject: new FormControl(null, ),
    lastdate: new FormControl(null),
})
constructor(private http:HttpClient){

}
onSubmit(){
  this.formData=this.AssignmentForm.value;
  const formdata=new FormData();
  formdata.append("std",this.formData.std);
  formdata.append("subject",this.formData.subject);
  formdata.append("lastdate",this.formData.lastdate);
  formdata.append("file",this.selectedFile);
  this.http.post("http://localhost:8081/addAssignment",formdata).subscribe(
    (response:any)=>{
      console.log(response);
    },
    (error:any)=>{
      console.log(error)
    }
  )
   alert(this.formData)

}
filechange(event:any){
  this.selectedFile=event.target.files[0];


}
}
