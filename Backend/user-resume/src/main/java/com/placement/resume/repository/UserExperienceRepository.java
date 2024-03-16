package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserExperience;
import com.placement.resume.model.UserPersonal;

@Repository
public interface UserExperienceRepository extends JpaRepository<UserExperience,Long> {

	Set<UserExperience> findByPersonal(UserPersonal userPersonal);
}
