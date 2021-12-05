import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL ,API_JPA_URL} from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { } 

   getAllTodos(username:string){

    // let password='dummy'
    // let basicAuthHeaderString='Basic '+window.btoa(username+":"+password);
    // let headers=new HttpHeaders({
    //   Authorization: basicAuthHeaderString

    // })
 
    //  return this.http.get(`${API_URL}/users/${username}/todos`,{headers});

    return this.http.get(`${API_JPA_URL}/users/${username}/todos`);

   }

   deleteTodo(username:string,id:number){
     return this.http.delete(`${API_JPA_URL}/users/${username}/todos/${id}`)
   }

   getTodoById(username:string,id:number){
      return this.http.get<Todo>(`${API_JPA_URL}/users/${username}/todos/${id}`);
   }
   
   updateTodo(username:string,id:number,todo:Todo){
    return this.http.put(`${API_JPA_URL}/users/${username}/todos/${id}`,todo);

   }
   saveTodo(username:string,todo:Todo){
    return this.http.post(`${API_JPA_URL}/users/${username}/todos`,todo);

   }

}
