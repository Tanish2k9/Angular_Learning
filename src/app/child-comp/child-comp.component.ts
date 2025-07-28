import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {
  @Input() message:string="";
  @Input() valueData:string="";


  @Output()
  messageEvent = new EventEmitter<string>();


  sendData(){
    this.messageEvent.emit("data from child");
  }

}
