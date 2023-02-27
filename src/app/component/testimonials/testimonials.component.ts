import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Virtual,Autoplay]);


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {


  constructor() {

  }


  ngOnInit(): void {}
}
