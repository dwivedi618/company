import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import * as Rellax from 'rellax';
// declare var Rellax : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

export class AppComponent implements OnInit{
  title = 'company';
  
   clients : number;
   projects : number;
   followers : number;

  intervalClient;


  constructor(){
    this.clients = 0;
    this.projects = 0;
    this.followers = 0;
    this.counter();



  }
ngOnInit(){
  var rellax = new Rellax('.rellax',{
    center: true,
    
  });
  var rella = new Rellax('.bucky-ball',{
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
  
    this.intervalClient = setInterval( ()=>{
      if(this.clients == 53){ 
        clearInterval(this.intervalClient);
    }
    this.clients ++
    },
     50);

     this.intervalProject = setInterval( ()=>{
      if(this.projects == 77){ 
        clearInterval(this.intervalProject);
    }
    this.projects ++
    },
     40);

     this.intervalFollower = setInterval( ()=>{
      if(this.followers == 153){ 
        clearInterval(this.intervalFollower);
    }
    this.followers ++
    },
     100);
  }
  


  


}
