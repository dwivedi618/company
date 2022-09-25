import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, group, state, keyframes } from '@angular/animations';
import * as Rellax from 'rellax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { services, services_more } from './json.ts/services';

// declare var Rellax : any;
export interface chatRoom {
  id: number,
  question: string,
  type: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
    trigger('contactBtn', [
      state('out', style({
        width: 120,
        transform: 'translateZ(100px)', opacity: 1
      })),
      transition('* => void',

        animate("1s ease", keyframes([
          // style({ transform: 'perspective(400px)', offset: 0 }),
          // style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
          //         opacity: 1, offset: 0.3 }),
          //         style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
          //         opacity: 0, offset: 1 }),
          style({ opacity: 1, transform: '*' }),
          style({ opacity: 0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 180deg)' })
        ]))

      )
    ]),
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

export class AppComponent implements OnInit {
  title = 'company';

  clients: number;
  projects: number;
  followers: number;
  SERVICES = services;
  SERVICES_MORE = services_more;

  intervalClient;
  chatStarted = false;
  chatForm: FormGroup;
  visitor = '';
  chatEnded: boolean;

  constructor(private fb: FormBuilder) {
    this.clients = 0;
    this.projects = 0;
    this.followers = 0;
    this.counter();

    this.chatForm = this.fb.group({
      visitor: [''],
      message1: [],
      email: ['', Validators.email],
      answerId: [],
      answer: []
    })

  }
  ngOnInit() {
    var rellax = new Rellax('.rellax', {
      center: true,

    });
    var rella = new Rellax('.bucky-ball', {
      speed: -4,
      center: false,
      wrapper: '.featured-section',
      round: true,
      vertical: true,
      horizontal: false
    })
    rella.refresh();
  }
  intervalProject;
  intervalFollower;

  counter() {

    this.intervalClient = setInterval(() => {
      if (this.clients == 53) {
        clearInterval(this.intervalClient);
      }
      this.clients++
    },
      50);

    this.intervalProject = setInterval(() => {
      if (this.projects == 77) {
        clearInterval(this.intervalProject);
      }
      this.projects++
    },
      40);

    this.intervalFollower = setInterval(() => {
      if (this.followers == 153) {
        clearInterval(this.intervalFollower);
      }
      this.followers++
    },
      100);
  }
}
