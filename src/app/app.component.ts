import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad works!';

//Criando eventos com  EVENTEMITTER
  //1° passo importar output e eventemitter.
     //import { Output, EventEmitter} from '@angular/core';
  
  //2° passo declarar output.
      //@Output() myEvent = new EventEmitter();
  
  //3°Declarar metodo que ira disparar evento.

    // clicked(): void{
     //  this.myEvent.emit();
    //}
  
//No template que usa o componente
  //<mt-clickable (myEvent)="willBeCalled()"></mt-clickable>
  //willBeCalled(): void{
    //console.log('Event from clickable');
  //}



}



