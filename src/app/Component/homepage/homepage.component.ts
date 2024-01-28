import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos";




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
    imgsrc:any="assets/school.jfif";
    hei:any="600";
    wid:any="1530";
    hoveredCard: number | null = null;
    constructor(private router: Router){

    }
    ngOnInit() {
      AOS.init();

    }

  hoverCard(cardNumber: number): void {
    this.hoveredCard = cardNumber;
  }

  unhoverCard(): void {
    this.hoveredCard = null;
  }


}
