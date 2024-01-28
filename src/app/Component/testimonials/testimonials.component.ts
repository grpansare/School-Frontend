// testimonials.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    [
      { name: 'Mr. Smith', message: 'Our school provides a nurturing environment for both students and teachers.', role: 'teacher' },
      { name: 'Ms. Johnson', message: 'I appreciate the dedication of the staff towards the academic growth of each student.', role: 'teacher' },
      { name: 'Mr. Davis', message: "The school's commitment to holistic education is truly commendable.", role: 'teacher' }
    ],
    [
      { name: 'John Doe', message: "I've had a great learning experience at this school. The teachers are supportive and helpful.", role: 'student' },
      { name: 'Jane Doe', message: 'The extracurricular activities offered here have enhanced my overall development.', role: 'student' },
      { name: 'Ganesh', message: "I'm grateful for the positive learning atmosphere that the school provides.", role: 'student' }
    ],
    [
      { name: 'Emma', message: "The school's emphasis on values and discipline has positively influenced my academic journey." ,role: 'student'},
      { name: 'Daniel', message: "I've gained valuable skills and knowledge that will undoubtedly contribute to my future success.",role: 'student' },
      { name: 'Sophia', message: 'The supportive community at this school has made my learning experience truly enjoyable.' ,role: 'student'}
    ]
    // Add more testimonials as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
