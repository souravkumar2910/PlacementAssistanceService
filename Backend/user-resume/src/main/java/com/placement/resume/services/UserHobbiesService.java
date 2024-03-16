package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserHobbies;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.repository.UserHobbiesRepository;

@Service
public class UserHobbiesService {
	
	private UserHobbiesRepository userHobbiesRepository;

	public UserHobbiesService(UserHobbiesRepository userHobbiesRepository) {
		super();
		this.userHobbiesRepository = userHobbiesRepository;
	}
	
	public UserHobbies createUserHobby(UserHobbies userHobbies) {
		userHobbiesRepository.save(userHobbies);
		return userHobbies;
	}
	
	public UserHobbies getUserEducationDetails(Long userId) {
		return this.userHobbiesRepository.findById(userId).get();
	}
	
public Set<UserHobbies> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userHobbiesRepository.findByPersonal(userPersonal);
	}
}
