import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './adminlogout.component.html',
  styleUrl: './adminlogout.component.css'
})
export class AdminlogoutComponent {
 constructor(private router:Router){
// this.logout();
this.LogoutConfirmation();
 }
//  logout(){
//   localStorage.removeItem("username");
//   this.router.navigateByUrl('/');
//  }
 LogoutConfirmation(): void {
 this. openLogoutConfirmation().then((confirmed) => {
    if (confirmed) {
      localStorage.removeItem("username");
        this.router.navigateByUrl('/');
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

