import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, group, state, keyframes } from '@angular/animations';
import * as Rellax from 'rellax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nextTick } from 'process';
// declare var Rellax : any;
export interface chatRoom {
  id : number,
  question : string,
  type : string
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
    trigger('contactBtn',[
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
          style({opacity : 1,transform : '*'}),
          style({  opacity: 0,transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 180deg)' })
        ]))
            
      )
    ])
  ],
})

export class AppComponent implements OnInit{
  title = 'company';
  
   clients : number;
   projects : number;
   followers : number;

  intervalClient;
  chatStarted = false;
  chatForm :FormGroup;
  visitor = '';
  chatEnded: boolean;

  constructor(private fb : FormBuilder){
    this.clients = 0;
    this.projects = 0;
    this.followers = 0;
    this.counter();

    this.chatForm = this.fb.group({
      visitor : [''],
      message1 : [],
      email : ['',Validators.email],
      answerId : [],
      answer : []
    })

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
  

chatRoom : chatRoom[] = [];
botQuestions = [
  { id:0,question :`Hey! I am Sam ,what's your name?` ,type:'text' },
  { id:1,question :'What do you have in mind?',type : 'text' },
  { id:2,question :'Thank you , please provide you Email' , type : 'email' },
  { id:3,question :`Thank you , ${ this.visitor} Have a good day , we contact you shortly `, type : 'text' }



]
userResponse = [
  { id: 0 ,answer : ''},
  { id: 1 ,answer : ''},
  { id: 2 ,answer : ''},


]
  
startChat(){
  this.chatStarted = true;
  if(!this.chatRoom[0]){
    this.chatRoom.push(this.botQuestions[0]);
  }
  console.log(this.chatRoom);
}

send(message,questionId){
  message.answer && questionId=="0" && this.chatForm.patchValue({'visitor': message.answer || ''}); this.visitor= message.answer || '';
  message.answer && questionId=="1" && this.chatForm.patchValue({'message1': message.answer || ''});
  if(message.answer && questionId=="2"){
    this.chatForm.patchValue({'email': message.answer });
    // this.checkForValidEmail() ;
  }
  
  if((questionId +1 )< this.botQuestions.length) { 
    this.nextQuestion(this.botQuestions[questionId+1])
  }else{
    this.chatEnded = true;
  }
  console.log("user",this.chatForm.value);

}
checkForValidEmail(){
  this.chatForm.value.email.invalid
}
nextQuestion(question){
  
  this.chatRoom = [];
  this.chatForm.patchValue({'answer': ''});
  this.chatRoom.push(question);
  if((this.chatRoom[0].id +1 )< this.botQuestions.length) { 
    this.chatEnded = false;
  }else{
    this.chatEnded = true;
  }
}

}
