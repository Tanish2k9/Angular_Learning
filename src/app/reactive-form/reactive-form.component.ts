import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { onlyLetterValidator } from '../Validators/onlyLetterValidator';
import { whiteSpaceValidator } from '../Validators/whiteSpaceValidator';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  // taskForm:FormGroup = new FormGroup({

  //   id: new FormControl('',Validators.required),
  //   name: new FormControl(''),
  //   adress: new FormGroup({
  //     city:new FormControl(),
  //     state: new FormControl()
  //   })
  // });


  taskForm:FormGroup;

  constructor(private fb:FormBuilder){

    this.taskForm = this.fb.group({

      id:[''],
      name:['',whiteSpaceValidator],

      adress:this.fb.group({
        city:['',Validators.required],
        state:['']
      })
    })

  }

  onSubmit(){
    console.log(this.taskForm);


  }


}
