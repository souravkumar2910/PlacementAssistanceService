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
import com.placement.resume.model.UserExperience;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.services.UserExperienceService;

@RestController
@RequestMapping("/experience")
public class UserExperienceController {
	
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserExperienceService userExperienceService;
	
//	public UserExperienceController(UserExperienceService userExperienceService) {
//		super();
//		this.userExperienceService = userExperienceService;
//	}
	
	@PostMapping
	public UserExperience createUserExperience(@RequestHeader String jwtToken, @RequestBody UserExperience userExperience)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return userExperienceService.createUserExperience(userExperience);
	}
	
//	@GetMapping("/{expId}")
//	public UserExperience getUserDetail(@RequestHeader String jwtToken, @PathVariable("expId") Long expId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userExperienceService.getUserEexperienceDetails(expId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getExperience(@PathVariable("userId") Long userId)
	{
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserExperience> userDataOfPersonal = this.userExperienceService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	}
}
