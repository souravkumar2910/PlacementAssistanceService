package com.placement.authentication.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.placement.authentication.model.Admin;
import com.placement.authentication.model.LoginData;
import com.placement.authentication.model.User;
import com.placement.authentication.repository.AdminRepository;
import com.placement.authentication.service.UserService;


/**
 * <h1>REST API Controller for User Registration</h1> This controller class accesses the
 * UserService class and responds to the HTTP requests to User.
 * 
 * @CrossOrigin added to allow React Application to send HTTP request
 * 
 * @author Vivek Kumar
 * @version 0.1
 * @since 11-04-2022
 */

@RestController
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	public List<User> getAllUser(){
		return userService.retrieveAllUser();
	}
	
	@GetMapping("/{email}")
	public User getUserById(@PathVariable("email") String email){
		return userService.retrieveUserId(email);
	}
	
	
	@PostMapping("/login")
	public User getLoginUser(@RequestBody LoginData loginData) throws Exception {
		return userService.findUserWithEmailAndPass(loginData);
	}
	
	@PostMapping("/register")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void registerUser(@RequestBody User user){
		userService.saveUser(user);
	}
	
	@PostMapping("/adminlogin")
	public Admin adminLogin(@RequestBody Admin admin) {
		return this.adminRepo.getByEmailAndPassword(admin.getEmail(),admin.getPassword());
	}
	
	@GetMapping("/verify-token/{token}")
	public boolean verifyToken(@PathVariable String token) {
	boolean verifiedToken = false;

	if (token != null ) {
	try {
	// String token = header.substring(SecurityConstants.TOKEN_PREFIX.length());
	Algorithm algorithm =Algorithm.HMAC256("secret".getBytes());
	JWTVerifier verifier=JWT.require(algorithm).build();
	DecodedJWT decodedJWT = verifier.verify(token);
	String username=decodedJWT.getSubject();
	if(username!=null) {
	verifiedToken = true;
	}
	}catch(Exception ex) {

	}
	}
	return verifiedToken;
	}
	
}
