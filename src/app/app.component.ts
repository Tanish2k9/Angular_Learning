import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { TodoComponent } from "./todo/todo.component";
import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { TruncatePipe } from './truncate.pipe';
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { RoughService } from './rough.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, CommonModule, ReactiveFormComponent]
})
export class AppComponent {
  title = 'angular_learning';

  rough:RoughService = inject(RoughService);





  constructor(private truncate:TruncatePipe){}

  birthdate = new Date(2000,8,30);


  myName= "tanishdfjjadsfjnjkadsf";


  transformMyName(){
    this.myName = this.truncate.transform(this.myName,10)


    this.rough.products.push({
      id:5,
      name:"daskfiasjgi"
    },)
  }


  price:number = 10;


  data = {
    id:1
  }



  description:string = "?ashbfjasjfnkajdsnknas"
}
