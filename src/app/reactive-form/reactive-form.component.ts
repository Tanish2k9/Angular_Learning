import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  taskForm:FormGroup = new FormGroup({

    id: new FormControl('',Validators.required),
    name: new FormControl(''),
    adress: new FormGroup({
      city:new FormControl(),
      state: new FormControl()
    })
  });


  onSubmit(){
    console.log(this.taskForm);


  }


}
