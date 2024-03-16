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
import com.placement.resume.model.UserSocialLink;
import com.placement.resume.services.UserSocialLinkService;

@RestController
@RequestMapping("/social")
public class UserSocialLinkController {
	
	@Autowired
	private ResumeAuth resumeAuth;

	@Autowired
	private UserSocialLinkService userSocialLinkService;

//	public UserSocialLinkController(UserSocialLinkService userSocialLinkService) {
//		super();
//		this.userSocialLinkService = userSocialLinkService;
//	}
	
	@PostMapping
	public UserSocialLink createUserSocialLink(@RequestHeader String jwtToken, @RequestBody UserSocialLink userSocialLink) 
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		return userSocialLinkService.createUserSocialLink(userSocialLink);
	}
	
//	@GetMapping("/{userId}")
//	public UserSocialLink getUserDetail(@RequestHeader String jwtToken, @PathVariable("userId") Long userId) 
//			throws AccessForbiddenException {
//		resumeAuth.isTokenValid(jwtToken);
//		return this.userSocialLinkService.getUserSocialLink(userId);
//	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getExperience(@RequestHeader String jwtToken, @PathVariable("userId") Long userId)
			throws AccessForbiddenException {
		resumeAuth.isTokenValid(jwtToken);
		UserPersonal personalDetail = new UserPersonal();
		personalDetail.setId(userId);
		Set<UserSocialLink> userDataOfPersonal = this.userSocialLinkService.getDataOfPersonal(personalDetail);
		return ResponseEntity.ok(userDataOfPersonal);
	}
}
