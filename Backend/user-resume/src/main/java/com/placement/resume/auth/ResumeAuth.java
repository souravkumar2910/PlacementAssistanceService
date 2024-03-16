package com.placement.resume.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
//import com.cts.GlobalConstants;
import com.placement.resume.exception.AccessForbiddenException;

/**
* This class serves as the spring component to authenticate JWT Tokens.
*
* @author Sourav Kumar
* @version 1.0
* @since 19-05-2022
*/

@Component
public class ResumeAuth {

	private static final Logger LOGGER = LoggerFactory.getLogger(ResumeAuth.class);
	
	@Autowired
	private RestTemplate restTemplate; /**
	* Method to check JWT validation
	*
	* @param token
	* @return boolean
	* @throws AccessForbiddenException
	*/
	public boolean isTokenValid(String token) throws AccessForbiddenException {
	LOGGER.info("Start");
	String url = "http://localhost:9090" + "/authentication-service/auth/verify-token/" + token;
	boolean isValid = restTemplate.getForEntity(url, Boolean.class).getBody();
	LOGGER.info("Retrieved JWT Auth Response: {}", isValid);
	if (isValid)
	return isValid;
	else {
	LOGGER.info("Throwing exception for invalid JWT");
	throw new AccessForbiddenException("Jwt Authorization Failed");
	}
}
}

