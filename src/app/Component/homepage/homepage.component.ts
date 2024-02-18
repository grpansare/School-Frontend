import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Aos from 'aos';







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
      Aos.init();
    }
  hoverCard(cardNumber: number): void {
    this.hoveredCard = cardNumber;
  }

  unhoverCard(): void {
    this.hoveredCard = null;
  }


}
