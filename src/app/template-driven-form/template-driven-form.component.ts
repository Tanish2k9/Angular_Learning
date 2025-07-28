import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm ,NgModel} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {


  onInputChange(data:any){

    console.log(data);

  }


  onSubmit(formname:NgForm){


    console.log(formname.value);
  }
}
