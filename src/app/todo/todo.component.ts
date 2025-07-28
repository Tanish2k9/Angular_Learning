import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';
import { canComponentDeactivat } from '../Guards/deacti.guard';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements canComponentDeactivat {


  hasSavedChanges = true;

  canDactiv(){

    if(this.hasSavedChanges){
      return confirm("do you wan to leave page");
    }

    return true;
  }


  todo:string = "";

  listOfTodo:string[]=[];
  submit(){



    this.listOfTodo.push(this.todo);

    this.todo = "";

  }


  onDelete(index :number){
    console.log(index);
    this.listOfTodo.splice(index,1);
  }

}
