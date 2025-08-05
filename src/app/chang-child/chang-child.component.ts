import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chang-child',
  imports: [],
  templateUrl: './chang-child.component.html',
  styleUrl: './chang-child.component.css'
})
export class ChangChildComponent implements OnChanges,OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{


  timer:any;
  ngOnDestroy(): void {
    console.log("destroyed");
    clearInterval(this.timer);
  }
  ngAfterContentChecked(): void {
    console.log("content checked",this.fromParent);
  }
  ngAfterContentInit(): void {
    console.log("content init",this.fromParent);
  }
  ngAfterViewChecked(): void {
    console.log("view checked",this.hi)
  }


  @ViewChild('hi') hi!:ElementRef;


  @ContentChild("fromParent") fromParent!:ElementRef;




  ngAfterViewInit(): void {
    console.log("after view init",this.hi);
  }
  ngDoCheck(): void {
    console.log("ng do check in chald", this.dataObject);
  }

@Input() data:string = ""
@Input() dataObject={}

  ngOnInit(): void {


    console.log(" ng on onit in child",this.data)

    console.log(this.hi);

    this.timer = setInterval(()=>{
      console.log("timer");
    },1000)
    
  }

  onClick(){
    console.log(this.hi);

    this.hi.nativeElement.innerHTML="hello"
  }



  ngOnChanges(changes: SimpleChanges) {

    console.log(":ng on changes" )
    console.log(changes);
  }


  

}
