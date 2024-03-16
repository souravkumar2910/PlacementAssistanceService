package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserSocialLink;
import com.placement.resume.repository.UserSocialLinkRepository;

@Service
public class UserSocialLinkService {
	
	private UserSocialLinkRepository userSocialLinkRepository;

	public UserSocialLinkService(UserSocialLinkRepository userSocialLinkRepository) {
		super();
		this.userSocialLinkRepository = userSocialLinkRepository;
	}
	
	public UserSocialLink createUserSocialLink(UserSocialLink userSocialLink) {
		userSocialLinkRepository.save(userSocialLink);
		return userSocialLink;
	}
	
	public UserSocialLink getUserSocialLink(Long userId) {
		return this.userSocialLinkRepository.findById(userId).get();
	}
	
	public Set<UserSocialLink> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userSocialLinkRepository.findByPersonal(userPersonal);
	}
}

