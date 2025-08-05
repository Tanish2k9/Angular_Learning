import { Component } from '@angular/core';
import { ChangChildComponent } from "../chang-child/chang-child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  imports: [ChangChildComponent,CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent {

  childData:string = "data from parent"

  show:boolean=true;


  childObject ={
    id:1
  }


  changeChild(){
    this.childData = "change data"
    this.childObject = {
    id:2
  }
  }

}
