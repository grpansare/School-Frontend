import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrl: './examresult.component.css'
})
export class ExamresultComponent {
  baseurl="http://localhost:8081/getresult";
  resultsArr:any[]=[];
constructor(private htpp:HttpClient){
this.getExamResult();
}
getExamResult(){
  this.htpp.get<any[]>(this.baseurl).subscribe(
    sucess => {
      this.resultsArr = sucess;
      console.log(sucess)
    },
    error => {

    }

  );
}
}
