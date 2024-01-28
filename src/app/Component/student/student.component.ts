import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
constructor(){
  Swal.fire({
    title: "Login Successful",
    icon: "success"
  });
}
}
