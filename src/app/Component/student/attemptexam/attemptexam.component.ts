import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-attemptexam',
  templateUrl: './attemptexam.component.html',
  styleUrl: './attemptexam.component.css'
})
export class AttemptexamComponent {
  subject!: any;
  apiUrl = 'http://localhost:8081';
  quelist:any[]=[];
  quecounter:number=0;
  quenumber:number=1;
  answer!:string;
  score:number=0;
  studdata:any='';

answeredQuestions: boolean[] = Array(15).fill(false); // Initialize with false for 15 questions



  constructor(private route: ActivatedRoute,private http:HttpClient,private router:Router,private dialog: MatDialog) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      this.subject = params.get('subject');
    console.log(this.subject)
    this.getQuestions();

    });
  }
  getQuestions(){

    this.http.get(`${this.apiUrl}/getssquestions/${this.subject}`).subscribe(

      (response:any)=>{
        console.log("successful")
          console.log(response)
         this.quelist=response;
         console.log("quelisy"+this.quelist)

      },
      error=>{
        console.log(error)

      }
    )

   }
   validateanswer(selectedAnswer:string){
    console.log(selectedAnswer)
    if(selectedAnswer.length!=0){
      console.log("in sel ")
      this.answeredQuestions[this.quecounter] = true;
    }
    this.answer=this.quelist[this.quecounter].answer;
    if(selectedAnswer==this.answer){
   this.score++;
   console.log(this.score)
    }
    this.quecounter++;
    this.quenumber++;



   }
   redirectTo(i:number){
    this.quecounter=i;
    this.quenumber=i+1;
   }
   openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User clicked "Submit"
        this.submitExam();
      } else {

      }
    });
  }

  submitExam(): void {
     this.studdata = localStorage.getItem('studdata');


const student = JSON.parse(this.studdata);

console.log(student)
const examresult={
    studid:student.userid,
    studentname:student.firstname+" "+student.lastname,
    subject:this.subject,
    marks:this.score

}
    this.http.post(`${this.apiUrl}/saveresult`,examresult).subscribe(
      (response:any)=>{
        console.log(response)
        this.router.navigateByUrl('student/student-exams')

      },
      error=>{
        console.log(error)

      }
    )

  }
  }

