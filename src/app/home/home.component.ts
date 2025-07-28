import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

//interpolation
  title:string = "home componet"

  //propertybinding

  onClick(){
    console.log("clicked");
  }




  onInput(event:Event){
    const value = (event.target as HTMLInputElement).value
    this.title = value;
    console.log(value);

  }






}
