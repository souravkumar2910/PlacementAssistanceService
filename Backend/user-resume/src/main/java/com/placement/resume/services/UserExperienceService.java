package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserEducation;
import com.placement.resume.model.UserExperience;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.repository.UserExperienceRepository;

@Service
public class UserExperienceService {

	private UserExperienceRepository userExpRepository;
	
	public UserExperienceService(UserExperienceRepository userExpRepository) {
		super();
		this.userExpRepository = userExpRepository;
	}
	
	public UserExperience createUserExperience(UserExperience userExperience) {
		userExpRepository.save(userExperience);
		return userExperience;
	}
	
	public UserExperience getUserEexperienceDetails(Long userId) {
		return this.userExpRepository.findById(userId).get();
	}
	
	public Set<UserExperience> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userExpRepository.findByPersonal(userPersonal);
	}
}
