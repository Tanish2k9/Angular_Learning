import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {

  posts:any[]=[];
  
  ngOnInit(): void {
    this.getPost().subscribe((data:any)=>{this.posts = data})
  }
  http = inject(HttpClient);

  getPost(){
    return this.http.get("http://localhost:3000/posts");
  }


  onSubmit(){
    let idn = this.posts?.length + 1;

    const id = idn.toString();

    const payload = { "id": id, "title": "a title", "views": 100 };

    this.http.post("http://localhost:3000/posts",payload).subscribe((data)=>{
      console.log(data);
    })

    this.getPost().subscribe((data:any)=>this.posts = data);
  }

}
