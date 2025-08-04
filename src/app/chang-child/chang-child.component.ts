import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chang-child',
  imports: [],
  templateUrl: './chang-child.component.html',
  styleUrl: './chang-child.component.css'
})
export class ChangChildComponent implements OnChanges,OnInit,DoCheck {
  ngDoCheck(): void {
    console.log("ng do check in chald", this.dataObject);
  }

@Input() data:string = ""
@Input() dataObject={}

  ngOnInit(): void {


    console.log(" ng on onit in child",this.data)
    
  }



  ngOnChanges(changes: SimpleChanges) {

    console.log(":ng on changes" )
    console.log(changes);
  }


  

}
