import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ScrollReveal from 'scrollreveal';






@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    imgsrc:any="assets/school.jfif";

    hoveredCard: number | null = null;
    constructor(private router: Router){

    }

    ngOnInit() {
      ScrollReveal().reveal('landing', {
        duration: 1000,
        origin: 'left', // or 'right', 'top', 'bottom', etc.
        distance: '50px', // distance from the origin
        easing: 'ease-in-out', // animation easing
        // Other configuration options...
      });
    }
  hoverCard(cardNumber: number): void {
    this.hoveredCard = cardNumber;
  }

  unhoverCard(): void {
    this.hoveredCard = null;
  }


}
