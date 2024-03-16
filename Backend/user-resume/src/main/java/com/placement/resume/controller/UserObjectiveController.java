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
import com.placement.resume.model.UserObjective;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.services.UserObjectiveService;

@RestController
@RequestMapping("/objective")
public class UserObjectiveController {
	
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserObjectiveService userObjectiveService;

//	public UserObjectiveController(UserObjectiveService userObjectiveService) {
//		super();
//		this.userObjectiveService = userObjectiveService;
//	}
	
	@PostMapping
	public UserObjective createUserObjective(@RequestHeader String jwtToken, @RequestBody UserObjective userObjective)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return userObjectiveService.createUserObjective(userObjective);
	}
	
//	@GetMapping("/{userId}")
//	public UserObjective getUserDetail(@RequestHeader String jwtToken, @PathVariable("userId") Long userId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userObjectiveService.getUserObjectiveDetails(userId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getExperience(@PathVariable("userId") Long userId)
	{
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserObjective> userDataOfPersonal = this.userObjectiveService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	}
}
