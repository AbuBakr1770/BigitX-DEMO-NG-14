import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Testimonial {
  name: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-testimonials2',
  templateUrl: './testimonials2.component.html',
  styleUrls: ['./testimonials2.component.css']
})
export class Testimonials2Component implements OnInit {
  customOptions: OwlOptions = {
    items:2,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dotsEach: true,
    navSpeed: 90,
    autoplay: true,
    autoplayTimeout: 3500,
    margin:30,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
  }
  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      image: '../../assets/img/testimonials/testimonials-1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'John Doe',
      image: '../../assets/img/testimonials/testimonials-3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'John Doe',
      image: '../../assets/img/testimonials/testimonials-2.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

  ];

  ngOnInit() {
    console.log(this.testimonials);
  }
}
