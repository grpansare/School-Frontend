import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  clicked= false;
  handleclick () {

      this.clicked= !this.clicked

  }
constructor(private loginservice :LoginService,private router:Router){


}
isloggedin:boolean=this.loginservice.isLoggedIn();

logout(){
  this.loginservice.logout();
  this.router.navigate(['/']);
  console.log("in logout")
}
}
