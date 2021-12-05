package com.todo.restApi.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todo.restApi.db.Todo;
import com.todo.restApi.db.TodoJpaRepository;

@CrossOrigin(origins="*")
@RestController
public class TodoJpaContoller {
	
//    @Autowired
//	TodoDataHardcoded  service;
	@Autowired
	TodoJpaRepository jpaService;
    
    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo>getAllTodos(@PathVariable String username){
    	//return service.findAll();
    	return jpaService.findByUsername(username);
    	
    }
    
    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username,@PathVariable int id) {
    	Todo todo= jpaService.findById(id).get();
    	return todo;
    	
    }
    
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable int id ) {
    	
    	jpaService.deleteById(id);
    	return ResponseEntity.noContent().build();
    		
    
    	
    }
    
    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable int id ,@RequestBody Todo  todo) {
    	Todo updatedTodo= jpaService.save(todo);
    	return new ResponseEntity<Todo>(todo,HttpStatus.OK);
    	
    }
    
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username,@RequestBody Todo todo){
    	todo.setUsername(username);
    	Todo createdTodo= jpaService.save(todo);
    	URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
    			.buildAndExpand(createdTodo.getId()).toUri();
    	
    	return  ResponseEntity.created(uri).build();
    	
     }
     
	

}
