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
import com.placement.resume.model.UserProject;
import com.placement.resume.services.UserProjectService;

@RestController
@RequestMapping("/project")
public class UserProjectController {
	
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserProjectService userProjectService;

//	public UserProjectController(UserProjectService userProjectService) {
//		super();
//		this.userProjectService = userProjectService;
//	}
	
	@PostMapping
	public UserProject createUserProject(@RequestHeader String jwtToken, @RequestBody UserProject userProject)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return userProjectService.createUserProject(userProject);
	}
	
//	@GetMapping("/{pId}")
//	public UserProject getUserProject(@RequestHeader String jwtToken, @PathVariable("pId") Long pId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userProjectService.getUserProjectDetails(pId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getExperience(@PathVariable("userId") Long userId)
	{
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserProject> userDataOfPersonal = this.userProjectService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	}
}
