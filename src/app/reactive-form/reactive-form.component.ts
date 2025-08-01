import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
      }),

      skills: this.fb.array([new FormControl('')]),

      tasks: this.fb.array([

        this.fb.group({
          taskname:[''],
          desc:[''],
          })
      ])



    })

  }

  get skills():FormArray{
    return this.taskForm.get('skills') as FormArray;
  }

  get tasks():FormArray{
    return this.taskForm.get('tasks') as FormArray;
  }

  onSubmit(){
    console.log(this.taskForm);
  }
  addSkills(){
    (this.taskForm.get('skills') as FormArray).push(new FormControl(''));
  }


}
