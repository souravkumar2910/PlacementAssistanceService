package com.placement.resume.services;

import java.util.LinkedHashSet;
//import java.util.List;
import java.util.Set;
//import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserPersonal;
import com.placement.resume.repository.UserPersonalRepository;

@Service
public class UserPersonalService {

	private UserPersonalRepository userPersonalRepo;
	
	public UserPersonalService(UserPersonalRepository userPersonalRepo) {
		super();
		this.userPersonalRepo = userPersonalRepo;
	}

	public UserPersonal createUserPersonal(UserPersonal userPersonal) {
		userPersonalRepo.save(userPersonal);
		return userPersonal;
	}
	
	public Set<UserPersonal> getPersonalDetails() {
		return new LinkedHashSet<>(this.userPersonalRepo.findAll());
	}
	
	public UserPersonal getSinglePersonalDetails(Long userId) {
		return this.userPersonalRepo.findById(userId).get();
	}
}
