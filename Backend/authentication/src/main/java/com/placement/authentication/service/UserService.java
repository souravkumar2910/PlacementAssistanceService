package com.placement.authentication.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

//import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
//import org.springframework.web.client.RestTemplate;

//import com.placement.authentication..GlobalConstants;
import com.placement.authentication.jwt.SecurityConstants;
import com.placement.authentication.model.LoginData;
import com.placement.authentication.model.User;
import com.placement.authentication.repository.UserRepository;

/**
 * Service class to access Repository functionalities
 * 
 * @author Sourav Kumar
 * @version 0.1
 * @since 12-05-2022
 */
@Service
public class UserService implements UserDetailsService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

	@Autowired
	private UserRepository repo;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
//	@Bean
//	public RestTemplate getRestTemplate(RestTemplateBuilder builder) {
//		return builder.build();
//	}

	@Autowired
//	private RestTemplate restTemplate;

	public List<User> retrieveAllUser() {
		List<User> users = new ArrayList<>();
		Iterable<User> user = repo.findAll();
		user.forEach(users::add);
		return users;
	}
	
	public User retrieveUserId(String email){
		User user = repo.findByEmail(email);
		return user;
	}
	
	public User findByEmailId(String email) {
		return repo.findByEmail(email);
	}

	

	public User findUserWithEmailAndPass(LoginData loginData) {
		// TODO Auto-generated method stub
		return repo.findByEmailAndPassword(loginData.getEmail(), loginData.getPassword());
	}

	public void saveUser(User user) {
		// TODO Auto-generated method stub
		user.setPassword(bCryptPasswordEncoder
	           .encode(user.getPassword())); 
		repo.save(user);
		
	}

//	public User retrieveUserByContactId(int contactId) {
//		User user = repo.findByContactId(contactId);
//		return user;
//	}

	/**
	 * Method to authenticate User by email and password from database
	 * 
	 * @param LoginCredentials
	 * @return Map<String, Object>
	 */
//	public Map<String, Object> getUserFromEmail(String email){ //throws UserNotFoundException {
//		LOGGER.info("START");
//		Map<String, Object> dataMap = new HashMap<>();
//		try {  
//			//TODO: authenticate with password
//			LOGGER.debug("Fetching contact from email {}", email);
//			HashMap<String, String> uriVariables = new HashMap<>();
//			uriVariables.put("email", email);
//			String url=GlobalConstants.API_GATEWAY + "/mbulance-contact-service/contact/email/"+ email;
//			String dataContact = restTemplate.getForEntity(url, String.class).getBody();
//			JSONObject obj = new JSONObject(dataContact);
//			LOGGER.info("Retrieved Contact: {}", dataContact != null);
//			int contactId = obj.getInt("id");
//			Object contactData = restTemplate.getForEntity(url, Object.class).getBody();
//			
//			LOGGER.debug("Fetching user from contactId");
//			User user = retrieveUserByContactId(contactId);
//			LOGGER.info("Retrieved User: {}", user != null);
//			dataMap.put("contact", contactData);
//			dataMap.put("user", user);
//			
//			LOGGER.debug("Fetching address from addressId");
//			Object dataAddress = restTemplate.getForEntity(
//					GlobalConstants.API_GATEWAY + "/mbulance-address-service/address/" + user.getAddressId(),
//					Object.class).getBody();
//			LOGGER.info("Retrieved Address: {}", dataAddress != null);
//			dataMap.put("address", dataAddress);
//
//		} catch (NoSuchElementException e) {
//			// throw new UserNotFoundException(e.getMessage());
//		}
//		return dataMap;
//	}

	/**
	 * Method to fetch User for given ID from database
	 * 
	 * @param id
	 * @return Map<String, Object>
	 */
//	public Map<String, Object> getUserById(int id) { // throws UserNotFoundException {
//		LOGGER.info("START");
//		Map<String, Object> dataMap = new HashMap<>();
//		User user;
//		try {
//			LOGGER.debug("Fetching user from Id");
//			user = repo.findById(id).get();
//			LOGGER.info("Retrieved User: {}", user != null);
//			dataMap.put("user", user);
//
//			LOGGER.debug("Fetching contact from contactId");
//			Object dataContact = restTemplate.getForEntity(
//					GlobalConstants.API_GATEWAY + "/mbulance-contact-service/contact/" + user.getContactId(),
//					Object.class).getBody();
//			LOGGER.info("Retrieved Contact: {}", dataContact != null);
//			dataMap.put("contact", dataContact);
//
//			LOGGER.debug("Fetching address from addressId");
//			Object dataAddress = restTemplate.getForEntity(
//					GlobalConstants.API_GATEWAY + "/mbulance-address-service/address/" + user.getAddressId(),
//					Object.class).getBody();
//			LOGGER.info("Retrieved Address: {}", dataAddress != null);
//			dataMap.put("address", dataAddress);
//		} catch (NoSuchElementException e) {
//			// throw new UserNotFoundException(e.getMessage());
//		}
//		return dataMap;
//	}

	/**
	 * Method to insert new User into database
	 * 
	 * @param user
	 * @return User
	 */
//	public User saveUser(User user, JSONObject contact, JSONObject address) {
//		LOGGER.info("START");
//
//		// Setting up HTTP request headers
//		LOGGER.debug("Setting up request header for cross microservice communication");
//		MultiValueMap<String, String> requestHeaders = new LinkedMultiValueMap<>();
//		requestHeaders.add("Content-Type", "application/json");
//		requestHeaders.add("jwtToken", SecurityConstants.HEADER_TOKEN);
//		
////		HttpHeaders headers = new HttpHeaders();
////		headers.set("jwtToken", SecurityConstants.HEADER_TOKEN);
////		
////		HttpEntity<String> entity = new HttpEntity<>("paramters", headers);
//
//		// Packing up request body and headers
//		LOGGER.debug("Packing up request parameters");
//		HttpEntity<String> requestParams = new HttpEntity<>(contact.toString(), requestHeaders);
//
//		// Storing response as JSON Object
//		LOGGER.debug("Requesting response from Contact Microservice");
//		JSONObject contactRequestResponse = new JSONObject(
//				restTemplate.exchange(GlobalConstants.API_GATEWAY + "/mbulance-contact-service/contact/",
//						HttpMethod.POST,requestParams, String.class).getBody());
//
//		LOGGER.debug("Retrieved Contact: {}", contactRequestResponse.getInt("id"));
//		LOGGER.info("Updating new contact in User");
//		user.setContactId(contactRequestResponse.getInt("id"));
//
//		// Packing up request body and headers
//		LOGGER.debug("Packing up request parameters");
//		HttpEntity<String> addressRequestParams = new HttpEntity<>(address.toString(), requestHeaders);
//
//		// Storing response as JSON Object
//		LOGGER.debug("Requesting response from Address Microservice");
//		JSONObject addressRequestResponse = new JSONObject(
//				restTemplate.exchange(GlobalConstants.API_GATEWAY + "/mbulance-address-service/address/",
//						HttpMethod.POST,addressRequestParams, String.class).getBody());
//
//		LOGGER.debug("Retrieved Address: {}", addressRequestResponse.getInt("id"));
//		LOGGER.info("Updating new address in User");
//		user.setAddressId(addressRequestResponse.getInt("id"));
//		LOGGER.debug("Retrieved User: {}", user.getPassword()!=null);
//		
//		user.setPassword(bCryptPasswordEncoder
//		           .encode(user.getPassword())); 
//		
//		return repo.save(user);
//	}

//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		LOGGER.debug("Fetching contact from email {}", username);
//		String url=GlobalConstants.API_GATEWAY + "/mbulance-contact-service/contact/email/"+ username;
//		
//		HttpHeaders headers = new HttpHeaders();
//		headers.set("jwtToken", SecurityConstants.HEADER_TOKEN);
//		HttpEntity<String> entity = new HttpEntity<>("paramters", headers);
//		
//		Object dataContact = restTemplate.exchange(url, HttpMethod.GET, entity,Object.class).getBody();
//		User user = new User();
//		
//		if(dataContact!=null) {
//			JSONObject jsonContact = new JSONObject(restTemplate.exchange(url, HttpMethod.GET, entity, String.class).getBody());
//			LOGGER.info("Retrieved Contact: {}", dataContact != null);
//			int contactId = jsonContact.getInt("id");
//			
//			LOGGER.debug("Fetching user from contactId");
//			user = retrieveUserByContactId(contactId);
//			LOGGER.info("Retrieved User: {}", user != null);
//			
//		}else {
//			throw new UsernameNotFoundException("No user found");
//		}
//		
//		return new org.springframework.security.core.userdetails.User(username, user.getPassword(), new ArrayList<>());
//	}
	
	
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User user = findByEmailId(username);
		
		
		return new org.springframework.security.core.userdetails.User(username, user.getPassword(), new ArrayList<>());
	}
	
}
