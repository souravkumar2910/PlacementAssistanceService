package com.placement.resume.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placement.resume.auth.ResumeAuth;
import com.placement.resume.exception.AccessForbiddenException;
import com.placement.resume.model.UserHobbies;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.services.UserHobbiesService;

@RestController
@RequestMapping("/hobbies")
public class UserHobbiesController {
	
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserHobbiesService userHobbiesService;

//	public UserHobbiesController(UserHobbiesService userHobbiesService) {
//		super();
//		this.userHobbiesService = userHobbiesService;
//	}
	
	@PostMapping
	public UserHobbies createUserHobby(@RequestHeader String jwtToken, @RequestBody UserHobbies userHobbies) 
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return userHobbiesService.createUserHobby(userHobbies);
	}
	
//	@GetMapping("/{userId}")
//	public UserHobbies getUserDetail(@RequestHeader String jwtToken, @PathVariable("userId") Long userId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userHobbiesService.getUserEducationDetails(userId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getExperience(@PathVariable("userId") Long userId)
	{
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserHobbies> userDataOfPersonal = this.userHobbiesService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	}
}
