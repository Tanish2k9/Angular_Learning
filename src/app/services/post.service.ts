import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { catchError, Observable, throwError } from 'rxjs';
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

    return this.http.get<Post[]>(
      "https://dummyjson.com/users/999",{headers:headers,params:params,observe:'body',responseType:'json'}
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
console.log(error)
        if(error.status === 404){
return throwError(()=> new Error("post not found"))
        }else if(error.status === 401){
          return throwError(()=> new Error("unauthorize"))
          
        }

        
        return throwError(()=> new Error("invalid"))
      })
    );
  }


  sendPost(data:Post):Observable<Post>{


    let payload ={
      title:data.title
    }
     return this.http.post<Post>(this.baseUrl,payload)
  }




}
