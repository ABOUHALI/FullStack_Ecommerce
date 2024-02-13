package com.ecommerce.restcontroller;

import com.ecommerce.config.JwtUtil;
import com.ecommerce.model.ServerAuthenticationRoles;
import org.springframework.http.HttpEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.request.LoginRequest;
import com.ecommerce.service.impl.CustomerUserServiceImplementation;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private CustomerUserServiceImplementation userService;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/signup")
	public HttpEntity<?> signUp(@RequestBody User user) throws UserException{
		String email= user.getEmail();
		String password=user.getPassword();
		String firstName=user.getFirstName();
		String lastName=user.getLastName();
		
		User isEmailExist = userRepository.findByEmail(email);
		if(isEmailExist!=null) {
			throw new UserException("Email is already used");
		}

		User newUser = new User();
		newUser.setEmail(email);
		newUser.setPassword(passwordEncoder.encode(password));
		newUser.setFirstName(firstName);
		newUser.setLastName(lastName);
		newUser.setRole(ServerAuthenticationRoles.CLIENT.name());
		User savedUser = userRepository.save(newUser);
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(savedUser.getUsername(), password));
		return ResponseEntity.ok(jwtUtil.generateToken((UserDetails) authentication.getPrincipal()));
	}

	@PostMapping("/signin")
	public HttpEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		return ResponseEntity.ok(jwtUtil.generateToken((UserDetails) authentication.getPrincipal()));
	}

}
