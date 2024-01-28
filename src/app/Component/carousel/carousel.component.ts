import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  carouselItems = [
    {
      image: 'path/to/image1.jpg',
      alt: 'Image 1',
      title: 'Slide 1',
      description: 'Description for Slide 1'
    },
    {
      image: 'path/to/image2.jpg',
      alt: 'Image 2',
      title: 'Slide 2',
      description: 'Description for Slide 2'
    },
    // Add more items as needed
  ];
}

