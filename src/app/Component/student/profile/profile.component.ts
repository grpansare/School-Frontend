import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  studdata:any={};
  constructor(){
      this.studdata=localStorage.getItem("studdata");
    this.studdata = JSON.parse(this.studdata);

      console.log(this.studdata);
  }
}
