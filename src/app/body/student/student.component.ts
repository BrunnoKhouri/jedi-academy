import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  @Input() student: Student;
  @Output() myEvent = new EventEmitter; 
 

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

  clicked(): void{    
    this.myEvent.emit();
    console.log(`Student: ${this.student.img}`);
  }

}
