package com.placement.resume.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placement.resume.auth.ResumeAuth;
import com.placement.resume.model.UserEducation;
import com.placement.resume.model.UserPersonal;
//import com.placement.resume.model.UserPersonal;
import com.placement.resume.services.UserEducationService;
//import com.quiz.model.Question;
//import com.quiz.model.Quiz;
import com.placement.resume.exception.AccessForbiddenException;


@RestController
@RequestMapping("/education")
public class UserEducationController {
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserEducationService userEducationService;
	
//	public UserEducationController(UserEducationService userEducationService) {
//		super();
//		this.userEducationService = userEducationService;
//	}
	
	@PostMapping
    public UserEducation createUserEducation(@RequestHeader String jwtToken, @RequestBody UserEducation userEducation) 
    		throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
        return userEducationService.createUserEducation(userEducation);
    }
	
//	@GetMapping("/{eduId}")
//	public UserEducation getUserDetail(@RequestHeader String jwtToken, @PathVariable("eduId") Long eduId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userEducationService.getUserEducationDetails(eduId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getEducation(@PathVariable("userId") Long userId)
	{
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserEducation> userDataOfPersonal = this.userEducationService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	
	}
}
