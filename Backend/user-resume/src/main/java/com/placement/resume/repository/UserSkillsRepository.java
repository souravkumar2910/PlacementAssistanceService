package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserSkills;

@Repository
public interface UserSkillsRepository extends JpaRepository<UserSkills,Long> {

	Set<UserSkills> findByPersonal(UserPersonal userPersonal);
}
