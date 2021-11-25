import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
hidden1: boolean;
hidden2: boolean;
hidden: boolean;
  constructor() {
    this.hidden1 = false;
    this.hidden2 = false;
    this.hidden = false;
  }

  ngOnInit(): void {
  }
  toggleBadgeVisibility1() {
    this.hidden1 = !this.hidden1;
  }
  toggleBadgeVisibility2() {
    this.hidden2 = !this.hidden2;
  }
  counter = 1;
  incrementCount() {
    this.counter++;
  }


}
