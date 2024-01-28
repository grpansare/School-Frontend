import { Component } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(private loginservice:LoginService,private router:Router){

}
Logout(){
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
