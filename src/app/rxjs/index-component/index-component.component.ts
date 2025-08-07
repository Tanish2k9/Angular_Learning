import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, interval, map, Observable, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-index-component',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './index-component.component.html',
  styleUrl: './index-component.component.css'
})
export class IndexComponentComponent implements OnInit,OnDestroy{
  ngOnDestroy(): void {
    console.log("destroyed")
    this.subOb.unsubscribe();
  }
  
  myObservable = new Observable<string>((observer)=>{
    observer.next("hi")
    
    observer.next("hello")

    observer.complete();

  });


  form!:FormGroup;



  subOb!:Subscription;




  ngOnInit(): void {

    of(1,2,3,4,5).pipe(
      map((data)=>data*5),
      filter((x)=>x%2 === 0)
    ).subscribe((data)=>console.log(data));


    let obser = new Observable((subsriber)=>{
      subsriber.next("appple")
      subsriber.next("grapes")
    })

    let modify = obser.pipe(
      map((x,index)=>`${index} --- ${x}`)
    )

    modify.subscribe((data)=>console.log(data));
    obser.subscribe((x)=>console.log(x));

    this.form = new FormGroup({
      search:new FormControl("")
    })
  }


  onSubmit(){
    this.form.get('search')?.valueChanges.pipe(debounceTime(2000)).subscribe((x)=>console.log(x));
  }


 


  timer$ = interval(1000); 
  fruit$ = of("appple","banana");
}
