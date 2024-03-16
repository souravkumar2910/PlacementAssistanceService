package com.placement.resume.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.placement.resume.model.UserEducation;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserProject;
import com.placement.resume.repository.UserEducationRepository;
//import com.quiz.model.Question;
//import com.quiz.model.Quiz;

@Service
public class UserEducationService {

	private UserEducationRepository userEducationRepository;

	public UserEducationService(UserEducationRepository userEducationRepository) {
		super();
		this.userEducationRepository = userEducationRepository;
	}
	
	public UserEducation createUserEducation(UserEducation userEducation) {
		userEducationRepository.save(userEducation);
		return userEducation;
	}
	
	public UserEducation getUserEducationDetails(Long userId) {
		return this.userEducationRepository.findById(userId).get();
	}
	
	public Set<UserEducation> getDataOfPersonal(UserPersonal userPersonal) {
		
		return this.userEducationRepository.findByPersonal(userPersonal);
	}
//	public UserEducation updateUser(Long id, UserEducation userEducation) {
//		UserEducation userEduEntity
//                = userEducationRepository.findById(id).get();
//		userEduEntity.setUserId(userEducation.getUserId());
//		userEduEntity.setCourse(userEducation.getCourse());
//		userEduEntity.setCollegeName(userEducation.getCollegeName());
//		userEduEntity.setScore(userEducation.getScore());
//		userEduEntity.setStartDate(userEducation.getStartDate());
//		userEduEntity.setEndDate(userEducation.getEndDate());
//
//        userEducationRepository.save(userEduEntity);
//        return userEducation;
//    }
}
