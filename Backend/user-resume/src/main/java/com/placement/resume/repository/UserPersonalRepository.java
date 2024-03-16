package com.placement.resume.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.resume.model.UserPersonal;

@Repository
public interface UserPersonalRepository extends JpaRepository<UserPersonal,Long> {

}
