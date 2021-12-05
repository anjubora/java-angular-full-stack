package com.todo.restApi.entity;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Todo {
	@Id
	@GeneratedValue
	private int id;
	private String username;
	private String description;
	private Boolean  isCompleted;
	private Date targetDate;
	
	
	
	public Todo(int id, String username, String description, Boolean isCompleted, Date targetDate) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.isCompleted = isCompleted;
		this.targetDate = targetDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Boolean getIsCompleted() {
		return isCompleted;
	}
	public void setIsCompleted(Boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	

}
