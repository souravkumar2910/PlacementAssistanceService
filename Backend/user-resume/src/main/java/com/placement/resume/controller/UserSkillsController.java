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
import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserSkills;
import com.placement.resume.services.UserSkillsService;

@RestController
@RequestMapping("/skill")
public class UserSkillsController {
	  
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserSkillsService userSkillsService;

//	public UserSkillsController(UserSkillsService userSkillsService) {
//		super();
//		this.userSkillsService = userSkillsService;
//	}
	
	@PostMapping
	public UserSkills createUserSkills(@RequestHeader String jwtToken, @RequestBody UserSkills userSkills)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return userSkillsService.createUserSkills(userSkills);
	}
	
//	@GetMapping("/{userId}")
//	public UserSkills getUserDetail(@RequestHeader String jwtToken, @PathVariable("userId") Long userId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userSkillsService.getUserSkillDetails(userId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getExperience(@RequestHeader String jwtToken, @PathVariable("userId") Long userId)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserSkills> userDataOfPersonal = this.userSkillsService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	}
}
