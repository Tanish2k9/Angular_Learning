import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, catchError, debounceTime, filter, interval, map, Observable, of, ReplaySubject, retry, Subject, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-index-component',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './index-component.component.html',
  styleUrl: './index-component.component.css'
})
export class IndexComponentComponent implements OnInit,OnDestroy{
  ngOnDestroy(): void {
    console.log("destroyed")
    // this.subOb.unsubscribe();
  }
  
  // myObservable = new Observable<string>((observer)=>{
  //   observer.next("hi")
    
  //   observer.next("hello")

  //   observer.complete();

  // });


  // form!:FormGroup;



  // subOb!:Subscription;



  sub = new ReplaySubject<string>(3);

  attemps:number = 1;

  fakeApi(){


    console.log(this.attemps);


    this.attemps = this.attemps +1;




    let obs = new Observable<string>((observer)=>{
      // observer.next("hi");


      if(this.attemps >2){
observer.next("heelo")
      }else{
// observer.error("kjdsng")
observer.next("hjads");
      }


      
      
    });
    return obs;
  }



  unsub!:Subscription;





  ngOnInit(): void {

    // of(1,2,3,4,5).pipe(
    //   map((data)=>data*5),
    //   filter((x)=>x%2 === 0)
    // ).subscribe((data)=>console.log(data));


    // let obser = new Observable((subsriber)=>{
    //   subsriber.next("appple")
    //   subsriber.next("grapes")
    // })

    // let modify = obser.pipe(
    //   map((x,index)=>`${index} --- ${x}`)
    // )

    // modify.subscribe((data)=>console.log(data));
    // obser.subscribe((x)=>console.log(x));

    // this.form = new FormGroup({
    //   search:new FormControl("")
    // })



    // this.fakeApi().pipe(
    //     retry(5),

    //     catchError(err => {
    //   // this.errorMessage = 'Failed after 3 attempts';
    //   return of([]);
    // })

    // )
    // .subscribe((value)=>console.log(value));
this.sub.next("hi")
this.unsub = this.sub.subscribe((value)=>console.log(value));

this.sub.next("what");

    

    const a = this.sub.subscribe((value)=>console.log(value));
    const b = this.sub.subscribe((value)=>console.log(value));


this.unsub.add(a);
this.unsub.add(b);


    
  }



  onCLick(){

    // this.unsub.unsubscribe();

    this.sub.next("clicked");
  }


  // onSubmit(){
  //   this.form.get('search')?.valueChanges.pipe(debounceTime(2000)).subscribe((x)=>console.log(x));
  // }


 


  // timer$ = interval(1000); 
  // fruit$ = of("appple","banana");
}
