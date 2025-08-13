import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    localStorage.setItem('token',"asjfkajdskfjkanskfjkladsjfklj");
    
    this.getPost().subscribe((data:any)=>{
      if(data.ok){
        this.posts = data.body;
      }
      if(data.status === 401){
        alert("you can t access this page")
      }
      console.log("------------",data)
      })
  }
  http = inject(HttpClient);

  getPost(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })

    const params = new HttpParams().set('page','1').set('sort','asc');

    return this.http.get("http://localhost:3000/posts",{headers:headers,params:params,observe:'response',responseType:'json'});
  }


  onSubmit(){
    let idn = this.posts.length + 1;

    const id = idn.toString();

    const payload = { "id": id, "title": "a title", "views": 100 };

    this.http.post("http://localhost:3000/posts",payload).subscribe((data)=>{
      console.log(data);
      this.getPost().subscribe((data:any)=>this.posts = data.body);
    })

    
  }

}
