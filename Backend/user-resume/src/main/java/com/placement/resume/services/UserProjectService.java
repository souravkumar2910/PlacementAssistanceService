package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserExperience;
import com.placement.resume.model.UserPersonal;
//import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserProject;
import com.placement.resume.repository.UserProjectRepository;

@Service
public class UserProjectService {

	private UserProjectRepository userProjectRepository;
	

	public UserProjectService(UserProjectRepository userProjectRepository) {
		super();
		this.userProjectRepository = userProjectRepository;
	}
	
	public UserProject createUserProject(UserProject userProject) {
		userProjectRepository.save(userProject);
		return userProject;
	}
	
	public UserProject getUserProjectDetails(Long userId) {
		return this.userProjectRepository.findById(userId).get();
	}
	
	public Set<UserProject> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userProjectRepository.findByPersonal(userPersonal);
	}
}
