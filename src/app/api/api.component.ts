import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {

  postService = inject(PostService);
  errMsg = "";

  url = environment.apiUrl;

  posts:Post[]=[];
  
  ngOnInit(): void {

    console.log(this.url);

    localStorage.setItem('token',"asjfkajdskfjkanskfjkladsjfklj");
    
    this.postService.getPost().subscribe({

      next:(data:Post[])=>{
    
        this.posts = data;
    
      console.log("------------",data)
      },
      error:(err:Error)=>{
        this.errMsg = err.message;
        console.log(err.message);
      }
    })
  }
  http = inject(HttpClient);

  


  onSubmit(){
    let idn = this.posts.length + 1;

    const id = idn.toString();

    const payload = { "id": id, "title": "a title", "views": 100 };

   this.postService.sendPost(payload).subscribe((data)=>{
      console.log(data);
      this.postService.getPost().subscribe((data:any)=>this.posts = data.body);
    })

    
  }

}
