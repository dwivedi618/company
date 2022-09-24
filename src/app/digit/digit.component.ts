import { trigger, state, style, transition, group, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
  animations: [
    trigger('myInsert', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class DigitComponent implements OnInit {
  clients: number = 0;
  projects: number = 0;
  followers: number = 0;


  constructor() {

  }

  ngOnInit(): void {
    this.counter();
  }

  counter() {
    const intClient = setInterval(() => {
      if (this.clients == 53) {
        clearInterval(intClient);
      }
      this.clients++
    },
      50);

    const intProj = setInterval(() => {
      if (this.projects == 77) {
        clearInterval(intProj);
      }
      this.projects++
    },
      40);

    const intervalFollower = setInterval(() => {
      if (this.followers == 153) {
        clearInterval(intervalFollower);
      }
      this.followers++
    },
      100);
  }

}
