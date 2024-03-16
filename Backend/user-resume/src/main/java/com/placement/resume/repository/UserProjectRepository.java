package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserProject;

public interface UserProjectRepository extends JpaRepository<UserProject,Long> {

	Set<UserProject> findByPersonal(UserPersonal userPersonal);
}
