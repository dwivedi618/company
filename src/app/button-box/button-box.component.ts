import { Component, Input, OnInit } from '@angular/core';

export interface ButtonBox{
  icon ?: string,
  label : string,
  description ?: string,
  bg ?:string;
}
@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss']
})
export class ButtonBoxComponent implements OnInit {
  @Input() props : ButtonBox;
  constructor() { }

  ngOnInit(): void {
  }

}
