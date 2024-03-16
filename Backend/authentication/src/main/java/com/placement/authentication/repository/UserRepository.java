package com.placement.authentication.repository;


import org.springframework.data.jpa.repository.JpaRepository;

//import java.util.Map;

import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.placement.authentication.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	//User findByEmailIgnoreCaseAndPassword(String email, String password);
	
	
	User findByEmailAndPassword( String email, String password);

	User findByEmail(String email);
}
