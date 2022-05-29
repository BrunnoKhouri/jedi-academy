import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  name: string = 'Luke';
  isJedi: boolean = true;
  //PROPERTY BINDING
  //ONE-WAY BINDING
  //No componente ts
  // user = {
  //   name: 'Luke Skywalker',
  //   isJedi: true
  // };


  //No Html
  //<input type='text' [value]="user.name">

  constructor() { }

  ngOnInit() {
  }

}
