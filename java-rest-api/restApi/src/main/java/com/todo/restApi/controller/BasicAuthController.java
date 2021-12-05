package com.todo.restApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.restApi.entity.BasicAuthenticateBean;
import com.todo.restApi.services.BasicAuthService;
import com.todo.restApi.services.TodoDataHardcoded;

@CrossOrigin(origins="*")
@RestController
public class BasicAuthController {
    @Autowired
	BasicAuthService  service;
	  
  @GetMapping("/basicauth")
  public BasicAuthenticateBean baiscAuthentication() {
	 return  service.basicAuth();
	  
  }
}
