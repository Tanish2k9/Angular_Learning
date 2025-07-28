import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  imports: [RouterModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {


  constructor(  private route:ActivatedRoute){

  }


  ngOnInit(): void {


    let todoId = this.route.snapshot.paramMap.get("todoId");

    console.log(todoId);


    this.route.queryParamMap.subscribe((quer)=>{


      let value = quer.get('search');

      console.log(value);

    })
    
  }


}
