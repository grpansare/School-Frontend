import { Component } from '@angular/core';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrl: './teacherhome.component.css'
})
export class TeacherhomeComponent {
  username: any = localStorage.getItem('username');

}
