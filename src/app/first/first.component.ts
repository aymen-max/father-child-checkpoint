import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mytext='give me a color';
colorD='blue';
colorT='blue';
colorDefault(){
  this.colorT= this.colorD;
}
}
