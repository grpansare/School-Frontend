import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { AdminComponent } from './Component/admin/admin.component';
import { AddstudentComponent } from './Component/admin/addstudent/addstudent.component';
import { AddteacherComponent } from './component/admin/addteacher/addteacher.component';
import { DisplaystudentComponent } from './Component/admin/displaystudent/displaystudent.component';
import { DisplayteachersComponent } from './Component/admin/displayteachers/displayteachers.component';
import { ClasslistComponent } from './Component/admin/classlist/classlist.component';
import { DisplayclassinfoComponent } from './Component/admin/displayclassinfo/displayclassinfo.component';
import { StaffattendanceComponent } from './Component/admin/staffattendance/staffattendance.component';
import { ExamsComponent } from './Component/admin/exams/exams.component';
import { NewExamComponent } from './Component/admin/Exams/new-exam/new-exam.component';
import { HomeComponent } from './Component/home/home.component';
import { ScheduledexamsComponent } from './Component/admin/exams/scheduledexams/scheduledexams.component';
import { StudentComponent } from './Component/student/student.component';
import { StudentExamsComponent } from './Component/Student/student-exams/student-exams.component';
import { AdminloginComponent } from './Component/adminlogin/adminlogin.component';
import { AttemptexamComponent } from './Component/student/attemptexam/attemptexam.component';
import { StaffsalaryComponent } from './Component/admin/staffsalary/staffsalary.component';
import { UpdatestudentComponent } from './Component/admin/updatestudent/updatestudent.component';
import { TeacherComponent } from './Component/teacher/teacher.component';
import { TeacherassignmentComponent } from './Component/teacher/teacherassignment/teacherassignment.component';
import { TeacherlogoutComponent } from './Component/teacher/teacherlogout/teacherlogout.component';
import { StudentattendanceComponent } from './Component/teacher/studentattendance/studentattendance.component';
import { FeesComponent } from './Component/student/fees/fees.component';
import { ExamresultComponent } from './Component/admin/examresult/examresult.component';
import { StudentgradeComponent } from './Component/teacher/studentgrade/studentgrade.component';
import { DisplaygradesComponent } from './Component/student/displaygrades/displaygrades.component';
import { AdminhomeComponent } from './Component/admin/adminhome/adminhome.component';
import { StudenthomeComponent } from './component/student/studenthome/studenthome.component';
import { TeacherhomeComponent } from './component/teacher/teacherhome/teacherhome.component';
import { AdmindashboardComponent } from './Component/admin/admindashboard/admindashboard.component';
import { UpdateteacherComponent } from './Component/admin/updateteacher/updateteacher.component';
import { ProfileComponent } from './Component/student/profile/profile.component';
import { AssignmentComponent } from './Component/teacher/assignment/assignment.component';
import { DisplayassignmentsComponent } from './Component/teacher/assignment/displayassignments/displayassignments.component';
import { NewassignmentComponent } from './Component/teacher/assignment/newassignment/newassignment.component';
import { MyattendanceComponent } from './Component/teacher/myattendance/myattendance.component';
import { ForgetpasswordComponent } from './Component/forgetpassword/forgetpassword.component';






const routes: Routes = [
  {path:'register',component:RegisterComponent,pathMatch:'full'},
  {path:"",component:HomeComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"studteacherlogin",component:LoginComponent},
  {path:"studteacherlogin/forgetpassword",component:ForgetpasswordComponent},

  {path:"admin",component:AdminComponent,
    children:[
      {path:"newStudent",component:AddstudentComponent},
      {path:"",component:AdmindashboardComponent},
      {path:"addteacher",component:AddteacherComponent},
      {path:"adminlogin",component:AdminloginComponent},
      {path:"Students",component:DisplaystudentComponent},

        {path:'updatestudent',component:UpdatestudentComponent},
        {path:'updateteacher',component:UpdateteacherComponent},



      {path:"teachers",component:DisplayteachersComponent},
      {path:"Classlist",component:ClasslistComponent},
      { path: 'displayclassinfo',component:DisplayclassinfoComponent },
      { path: 'StaffAttendance',component:StaffattendanceComponent },
      { path: 'staffsalary',component:StaffsalaryComponent },
      { path: 'examresult',component:ExamresultComponent },
      { path: 'exam',component:ExamsComponent ,
       children:[
        {path:'newexam',component:NewExamComponent},
        {path:'',component:ScheduledexamsComponent}
       ]}
       ,

      ]
 },
  {path:"student",component:StudentComponent,
   children:[
    {path:"student-exams",component:StudentExamsComponent},
    {path:"",component:StudenthomeComponent},
    { path: 'attemptexam/:subject', component:AttemptexamComponent },
    { path: 'Fees', component:FeesComponent },
    { path: 'Grades', component:DisplaygradesComponent },
    { path: 'profile', component:ProfileComponent },

   ]

},
{path:"teacher",component:TeacherComponent,
children:[
  {path:"Assignment",component:AssignmentComponent},
  {path:"newAssignment",component:NewassignmentComponent},
  // {path:"newAssignment",component:AssignmentComponent},
  {path:"logout",component:TeacherlogoutComponent},
  {path:"stud-attendance",component:StudentattendanceComponent},
  {path:"myattendance",component:MyattendanceComponent},
  {path:"grades",component:StudentgradeComponent},
  {path:"",component:TeacherhomeComponent},

]

},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
