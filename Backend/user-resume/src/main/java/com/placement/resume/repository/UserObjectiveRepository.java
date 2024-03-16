package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserObjective;
import com.placement.resume.model.UserPersonal;

@Repository
public interface UserObjectiveRepository extends JpaRepository<UserObjective,Long> {

	Set<UserObjective> findByPersonal(UserPersonal userPersonal);
}
