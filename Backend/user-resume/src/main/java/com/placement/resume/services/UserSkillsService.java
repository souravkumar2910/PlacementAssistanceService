package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserSkills;
import com.placement.resume.repository.UserSkillsRepository;

@Service
public class UserSkillsService {

	private UserSkillsRepository userSkillsRepository;

	public UserSkillsService(UserSkillsRepository userSkillsRepository) {
		super();
		this.userSkillsRepository = userSkillsRepository;
	}
	
	public UserSkills createUserSkills(UserSkills userSkills) {
		userSkillsRepository.save(userSkills);
		return userSkills;
	}
	
	public UserSkills getUserSkillDetails(Long userId) {
		return this.userSkillsRepository.findById(userId).get();
	}
	
	public Set<UserSkills> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userSkillsRepository.findByPersonal(userPersonal);
	}
}
