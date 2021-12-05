package com.todo.restApi.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.restApi.entity.Todo;

@Service
public class TodoDataHardcoded {
	
	
	private static List<Todo> todos=new ArrayList<Todo>();
	
	private static int idCounter=0;
	
	static {
		todos.add(new Todo(++idCounter,"anju","learning angular",false,new Date()));
		todos.add(new Todo(++idCounter,"anju","learning java",false,new Date()));
		todos.add(new Todo(++idCounter,"anju","visiting delhi",false,new Date()));
		todos.add(new Todo(++idCounter,"anju","playing guitar",false,new Date()));
		
	}
	
	public List<Todo> findAll(){
		return todos;
		
	}
	public Todo findById(int id) {
		for(Todo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
		
		
	}
	
	public Todo deleteById(int id) {
		Todo todo= findById(id);
		if(todo!=null) {
			todos.remove(todo);
			return todo;
		}
		return null;
	}
	
	public Todo saveTodo(Todo todo) {
		if(todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
			
			
		}else {
			deleteById(todo.getId());
			todos.add(todo);
			
		}
		return todo;
		
	}

}
