import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private router:Router){

  }



  onLogin(){

    // let todoTree = this.router.createUrlTree(['/todo']);


    


    this.router.navigate(['/todo'])

  }
}
