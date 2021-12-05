package com.todo.restApi.services;

import org.springframework.stereotype.Service;

import com.todo.restApi.entity.BasicAuthenticateBean;

@Service
public class BasicAuthService {
	
	public BasicAuthenticateBean basicAuth() {
		return new BasicAuthenticateBean("you are authenticated");
	}

}
