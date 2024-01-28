import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrl: './teacherdashboard.component.css'
})
export class TeacherdashboardComponent {
  constructor(private router:Router,private loginservice:LoginService){

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
