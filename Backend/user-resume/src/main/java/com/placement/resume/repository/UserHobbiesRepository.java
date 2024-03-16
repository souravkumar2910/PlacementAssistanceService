package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserHobbies;
import com.placement.resume.model.UserPersonal;

@Repository
public interface UserHobbiesRepository extends JpaRepository<UserHobbies,Long> {

	Set<UserHobbies> findByPersonal(UserPersonal userPersonal);
}
