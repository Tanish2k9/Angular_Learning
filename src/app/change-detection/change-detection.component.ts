import { Component } from '@angular/core';
import { ChangChildComponent } from "../chang-child/chang-child.component";

@Component({
  selector: 'app-change-detection',
  imports: [ChangChildComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent {

  childData:string = "data from parent"


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
