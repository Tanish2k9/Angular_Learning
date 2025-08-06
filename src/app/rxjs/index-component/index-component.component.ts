import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-index-component',
  imports: [],
  templateUrl: './index-component.component.html',
  styleUrl: './index-component.component.css'
})
export class IndexComponentComponent implements OnInit ,OnDestroy{
  ngOnDestroy(): void {


    console.log("destroyed")

    this.subOb.unsubscribe();
  }
  
  myObservable = new Observable<string>((observer)=>{
    observer.next("hi")
    
    observer.next("hello")

    observer.complete();

  });



  subOb!:Subscription;


  ngOnInit(): void {

    let obser = {
      next:(data:string)=>{
        console.log(data);
      },
      error:(err:string)=>{console.log(err)},
      complete:()=>{
        console.log("complete")
      }
    }

    this.subOb = this.myObservable.subscribe(obser);

    this.fruit$.subscribe((value)=>{console.log(value)})

    this.timer$.subscribe(val => console.log('Tick:', val));

  }


  timer$ = interval(1000); 
  fruit$ = of("appple","banana");
}
