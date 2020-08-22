import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  color="red";
  constructor() { }
  backgroundFather(Message){
this.color=Message;

  }
  ngOnInit(): void {
  }

}
