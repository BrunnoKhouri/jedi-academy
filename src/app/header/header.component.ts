import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('value') title: string;
  constructor() { }

  ngOnInit() {
  }


}
