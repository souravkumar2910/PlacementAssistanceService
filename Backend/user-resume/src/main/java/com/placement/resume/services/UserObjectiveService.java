package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserObjective;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.repository.UserObjectiveRepository;

@Service
public class UserObjectiveService {

	private UserObjectiveRepository userObjRepository;

	public UserObjectiveService(UserObjectiveRepository userObjRepository) {
		super();
		this.userObjRepository = userObjRepository;
	}
	
	public UserObjective createUserObjective(UserObjective userObjective) {
		userObjRepository.save(userObjective);
		return userObjective;
	}
	
	public UserObjective getUserObjectiveDetails(Long userId) {
		return this.userObjRepository.findById(userId).get();
	}
	
	public Set<UserObjective> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userObjRepository.findByPersonal(userPersonal);
	}
}
