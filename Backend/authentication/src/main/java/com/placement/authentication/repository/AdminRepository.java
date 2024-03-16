package com.placement.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.authentication.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

	Admin getByEmailAndPassword(String email, String password);
	

}
