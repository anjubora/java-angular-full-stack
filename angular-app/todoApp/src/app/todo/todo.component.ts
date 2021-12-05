import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number=0;
  todo:Todo=new Todo(0,"",false,new Date);
  constructor(private todoService:TodoDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo=new Todo(0,"",false,new Date);
    if(this.id!=-1){
    this.todoService.getTodoById('anju',this.id).subscribe((data)=>{
      this.todo=data;
    })
  }
  }

  saveTodo(){
    if(this.id!=-1){
     this.todoService.updateTodo('anju',this.todo.id,this.todo).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['todos'])
     })
  }else{
    this.todoService.saveTodo('anju',this.todo).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['todos'])
    })

  }
  }
}
