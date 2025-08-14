import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http:HttpClient) { }

  baseUrl = environment.apiUrl;


  getPost():Observable<Post[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })

    const params = new HttpParams().set('page','1').set('sort','asc');

    return this.http.get<Post[]>(this.baseUrl,{headers:headers,params:params,observe:'body',responseType:'json'});
  }


  sendPost(data:Post):Observable<Post>{


    let payload ={
      title:data.title
    }
     return this.http.post<Post>(this.baseUrl,payload)
  }




}
