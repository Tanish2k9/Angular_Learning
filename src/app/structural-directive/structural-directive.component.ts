import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


enum userRole{
  Admin="admin",
  User="user"
}

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

isShow:boolean= false;


userRole:userRole = userRole.Admin


users:string[] = ["tanish","manish","neeraj"];






}
