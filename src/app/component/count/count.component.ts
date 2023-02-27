import { Component, OnInit } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  componentInView = false;

  constructor() { }



  params: NgxAnimatedCounterParams = { start: 0, end: 500, interval: 10, increment: 20 };
  params2: NgxAnimatedCounterParams = { start: 0, end: 200, interval: 100, increment: 20 };
  params3: NgxAnimatedCounterParams = { start: 0, end: 1000, interval: 10, increment: 20 };
  params4: NgxAnimatedCounterParams = { start: 0, end: 15, interval: 100, increment: 1 };


  observer!: IntersectionObserver;



  ngOnInit() {

  }
  }







function ViewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

