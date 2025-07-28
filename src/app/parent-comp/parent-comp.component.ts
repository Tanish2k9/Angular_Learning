import { Component } from '@angular/core';
import { ChildCompComponent } from "../child-comp/child-comp.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent-comp',
  imports: [ChildCompComponent,RouterModule],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {


  data:string="sdjigkjsjdfg";


  recievedMessage(message:string){
    console.log(message);

    this.data = message;
  }
}
