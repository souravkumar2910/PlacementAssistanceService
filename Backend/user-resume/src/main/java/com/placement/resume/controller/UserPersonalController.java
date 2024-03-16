package com.placement.resume.controller;

import org.springframework.beans.factory.annotation.Autowired;

//import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.placement.resume.auth.ResumeAuth;
import com.placement.resume.exception.AccessForbiddenException;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.services.UserPersonalService;

@RestController
@RequestMapping("/personal")
public class UserPersonalController {
	
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserPersonalService userPersonalService;
	

//	public UserPersonalController(UserPersonalService userPersonalService) {
//		super();
//		this.userPersonalService = userPersonalService;
//	}
	
//	@PostMapping("/")
//	public UserPersonal createUserPersonal(@RequestBody UserPersonal userPersonal) {
//		return userPersonalService.createUserPersonal(userPersonal);
//	}
	
//	@GetMapping("/users/show")
//  public List<UserPersonal> getAllUsers() {
//      return  userPersonalService.getAllUsers();
//  }
	
	@PostMapping
	public ResponseEntity<?> createUserPersonal(@RequestHeader String jwtToken, @RequestBody UserPersonal userPersonal)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		UserPersonal personalDetails = this.userPersonalService.createUserPersonal(userPersonal);
		return ResponseEntity.ok(personalDetails);
	}
	
	//get category
	@GetMapping("/{userId}")
	public UserPersonal getUserDetail(@RequestHeader String jwtToken, @PathVariable("userId") Long userId) 
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return this.userPersonalService.getSinglePersonalDetails(userId);
	}
	
	//get all Category
//	@GetMapping("/")
//	public ResponseEntity<?> getUsersDetails()
//	{
//		return ResponseEntity.ok(this.userPersonalService.getPersonalDetails());
//	}
}
