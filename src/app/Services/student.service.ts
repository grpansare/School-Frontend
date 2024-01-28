import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url="http://localhost:8081/admin"
  constructor(private http:HttpClient) { }
  addstudent(student:any){
    console.log(student.Classname)
    //generate token
    return this.http.post(`${this.url}/addStudent`,student)


   }
}
