import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() colorMe:any;
@Output() myFavoriteColor = new EventEmitter();

send(){
  this.myFavoriteColor.emit('green');
}

}
