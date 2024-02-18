import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RegisterComponent } from './Component/register/register.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Component/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AdminComponent } from './Component/admin/admin.component';
import { DashboardComponent } from './Component/admin/dashboard/dashboard.component';
import { AddstudentComponent } from './Component/admin/addstudent/addstudent.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
import { AdminlogoutComponent } from './Component/admin/adminlogout/adminlogout.component';
import { MatIconModule } from '@angular/material/icon';
import { StudentdashboardComponent } from './Component/student/studentdashboard/studentdashboard.component';
import { AdminhomeComponent } from './Component/admin/adminhome/adminhome.component';
import { DialogComponent } from './Component/student/attemptexam/dialog/dialog.component';
import { UpdatestudentComponent } from './Component/admin/updatestudent/updatestudent.component';
import { TeacherComponent } from './Component/teacher/teacher.component';
import { TeacherdashboardComponent } from './Component/teacher/teacherdashboard/teacherdashboard.component';
import { TeacherlogoutComponent } from './Component/teacher/teacherlogout/teacherlogout.component';
import { TeacherassignmentComponent } from './Component/teacher/teacherassignment/teacherassignment.component';
import { StudentattendanceComponent } from './Component/teacher/studentattendance/studentattendance.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { FeesComponent } from './Component/student/fees/fees.component';
import { ExamresultComponent } from './Component/admin/examresult/examresult.component';
import { StudentgradeComponent } from './Component/teacher/studentgrade/studentgrade.component';
import { DisplaygradesComponent } from './Component/student/displaygrades/displaygrades.component';



import { StudenthomeComponent } from './component/student/studenthome/studenthome.component';
import { TeacherhomeComponent } from './component/teacher/teacherhome/teacherhome.component';
import { TestimonialsComponent } from './Component/testimonials/testimonials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Component/footer/footer.component';
import { AdmindashboardComponent } from './Component/admin/admindashboard/admindashboard.component';
import { UpdateteacherComponent } from './Component/admin/updateteacher/updateteacher.component';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { HeroComponent } from './Component/hero/hero.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { ProfileComponent } from './Component/student/profile/profile.component';
import { PaginatorComponent } from './Component/paginator/paginator.component';
import { Footer2Component } from './Component/footer2/footer2.component';
import { AssignmentComponent } from './Component/teacher/assignment/assignment.component';
import { DisplayassignmentsComponent } from './Component/teacher/assignment/displayassignments/displayassignments.component';
import { NewassignmentComponent } from './Component/teacher/assignment/newassignment/newassignment.component';
import { MyattendanceComponent } from './Component/teacher/myattendance/myattendance.component';
import { ForgetpasswordComponent } from './Component/forgetpassword/forgetpassword.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { OtpModalComponent } from './Component/otp-modal/otp-modal.component';













@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
     DashboardComponent,
    AdminComponent,
    AddstudentComponent,
    AddteacherComponent,

    DisplaystudentComponent,
    DisplayteachersComponent,
    ClasslistComponent,
    DisplayclassinfoComponent,
    StaffattendanceComponent,
    ExamsComponent,
    NewExamComponent,
    HomeComponent,
    ScheduledexamsComponent,
    StudentComponent,

    StudentExamsComponent,
    DashboardComponent,

    AdminloginComponent,
    AttemptexamComponent,
    StaffsalaryComponent,
    AdminlogoutComponent,
    StudentdashboardComponent,
    AdminhomeComponent,
    DialogComponent,
UpdatestudentComponent,
TeacherComponent,
TeacherdashboardComponent,
TeacherlogoutComponent,
StudentattendanceComponent,
HomepageComponent,
FeesComponent,
ExamresultComponent,
StudentgradeComponent,
DisplaygradesComponent,

TeacherassignmentComponent,
StudenthomeComponent,
TeacherhomeComponent,
TestimonialsComponent,
FooterComponent,
AdmindashboardComponent,
UpdateteacherComponent,
CarouselComponent,
HeroComponent,
ContactUsComponent,
ProfileComponent,
PaginatorComponent,
Footer2Component,
AssignmentComponent,
DisplayassignmentsComponent,
NewassignmentComponent,
MyattendanceComponent,
ForgetpasswordComponent,
OtpModalComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,



NgbModule,
   MdbAccordionModule,
   MdbCarouselModule,
   MdbCheckboxModule,
   MdbCollapseModule,
   MdbDropdownModule,
   MdbFormsModule,
   MdbModalModule,
   MdbPopoverModule,
   MdbRadioModule,
   MdbRangeModule,
   MdbRippleModule,
   MdbScrollspyModule,
   MdbTabsModule,
   MdbTooltipModule,
   MdbValidationModule,







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
