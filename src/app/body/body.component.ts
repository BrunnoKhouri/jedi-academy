import { Component, OnInit } from '@angular/core';
import { Student } from './student/student.model';
@Component({
  selector: 'jad-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  students: Student[] = [
    { img:'./../../../assets/luke.webp', name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { img:'./../../../assets/leia.webp', name: 'Leia', isJedi: false },
    { img:'./../../../assets/han.webp', name: 'Han Solo', isJedi: false }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  willBeCalled(): void{
    console.log('Event from clickable');
    // console.log(`Student: ${this.students.name}`);
  }
}
