import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iscoll:boolean = false

  switch(){
    // alert("hello")
    this.iscoll = ! this.iscoll
    console.log(this.iscoll);


  }
  constructor() { }

  ngOnInit(): void {

  }

}
