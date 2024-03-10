package com.ecommerce.service;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;

import java.util.List;

public interface UserService {
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

	public List<User> findAllUsers();
}
