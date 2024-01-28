import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrl: './classlist.component.css'
})
export class ClasslistComponent {
  baseurl="http://localhost:8081/admin/getclass"
    constructor(private http:HttpClient,private router:Router){

    }
    showclassinfo(classno:any){
      localStorage.setItem("classno",classno);
      this.router.navigateByUrl('admin/displayclassinfo');

    }
}
