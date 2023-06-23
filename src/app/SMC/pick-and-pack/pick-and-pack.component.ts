import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-and-pack',
  templateUrl: './pick-and-pack.component.html',
  styleUrls: ['./pick-and-pack.component.css']
})
export class PickAndPackComponent implements OnInit {
  activeItem = 0;
  constructor() { }

  ngOnInit() {
  }

}