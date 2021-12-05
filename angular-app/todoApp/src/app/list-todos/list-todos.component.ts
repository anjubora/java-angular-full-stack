import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(
    public id:number,
    public description:String,
    public isCompleted:Boolean,
    public targetDate:Date
  ){}
  }

  
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  // todos=[new Todo('1','Learn to dance',false,new Date()),
  //         new Todo('2','Become an expert at angular',false,new Date()),
  //       new Todo('3','Visit to delhi',false,new Date())]
  todos:any=[];
  message:string="";
  
  constructor(private service:TodoDataService,private router:Router) { }

  ngOnInit(): void {

    this.service.getAllTodos('anju').subscribe((res)=>{
      console.log(res)
      this.todos=res;
    })
  }
  refreshTodo(){
    this.service.getAllTodos('anju').subscribe((res)=>{
      console.log(res)
      this.todos=res;
    })
  }

  deleteTodo(id:number){
    this.service.deleteTodo('anju',id).subscribe((res)=>{
      this.refreshTodo();
      this.message=`Delete of Todo ${id} Successfull`;
    })
  }

  updateTodo(id:number){
    this.router.navigate(['todos',id])
    
  }


}
