import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html'
})
export class ZooComponent implements OnInit {

  @Input() sai:'sai';




  constructor() {
  }

  ngOnInit() {
  }

}