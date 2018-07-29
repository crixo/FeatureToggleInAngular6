import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p>
  home works!
  </p>

  <h1 *ngIf="name.length>1">{{name | uppercase}}</h1>

  <input [(ngModel)]="name" placeholder="name" />  
  `
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name="";

  constructor() { }

  ngOnInit() {
  }

}