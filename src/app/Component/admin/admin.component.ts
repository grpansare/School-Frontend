import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
constructor(){
  Swal.fire({
    title: "Login Successful!",
    icon: "success"
  });
}
}
