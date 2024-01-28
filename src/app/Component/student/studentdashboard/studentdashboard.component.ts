import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent {
  constructor(private loginservice:LoginService,private router:Router){

  }
  logout(){
    this.LogoutConfirmation();


  }
  LogoutConfirmation(): void {
    this.openLogoutConfirmation().then((confirmed) => {
        if (confirmed) {
          this.loginservice.logout();
     this.router.navigate(['/']);
        }
      });
    }
    openLogoutConfirmation(): Promise<boolean> {
      return Swal.fire({
        title: 'Logout Confirmation',
        text: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        return result.isConfirmed;
      });
    }
}
