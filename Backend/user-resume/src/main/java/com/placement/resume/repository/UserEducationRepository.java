package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserEducation;
import com.placement.resume.model.UserPersonal;

@Repository
public interface UserEducationRepository extends JpaRepository<UserEducation,Long> {
	
	Set<UserEducation> findByPersonal(UserPersonal userPersonal);
}
