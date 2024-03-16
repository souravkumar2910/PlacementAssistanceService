package com.placement.resume.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserExperience;
import com.placement.resume.model.UserPersonal;
import com.placement.resume.model.UserSocialLink;

@Repository
public interface UserSocialLinkRepository extends JpaRepository<UserSocialLink,Long> {

	Set<UserSocialLink> findByPersonal(UserPersonal userPersonal);
}
