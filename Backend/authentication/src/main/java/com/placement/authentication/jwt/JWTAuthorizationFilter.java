package com.placement.authentication.jwt;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.placement.authentication.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    public JWTAuthorizationFilter(AuthenticationManager authManager) {
        super(authManager);
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    
	@Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) throws IOException, ServletException {
		///authentication/verify-token/
		if(request.getServletPath().equals("/login")||request.getServletPath().equals("/auth/register")||
				request.getServletPath().equals("/auth/verify-token")) {
			chain.doFilter(request, response);
		} else {
			LOGGER.info("Fetching Headers");
			String header = request.getHeader(SecurityConstants.HEADER_STRING);
			if (header != null && header.startsWith(SecurityConstants.TOKEN_PREFIX)) {
				try {
	            String token = header.substring(SecurityConstants.TOKEN_PREFIX.length()); 
	            Algorithm algorithm =Algorithm.HMAC256("secret".getBytes());
	            JWTVerifier verifier=JWT.require(algorithm).build();
	            DecodedJWT decodedJWT = verifier.verify(token);
	            String username=decodedJWT.getSubject();
	            
	            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
	            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
	            chain.doFilter(request, response);
				}catch(Exception exception) {
					response.setHeader("error", exception.getMessage());
					response.setStatus(403);
					Map<String, Object> error=new HashMap<>();
					error.put("error", exception.getMessage());
					error.put("status", new Integer(403));
			    	response.setContentType("application/json");
			    	new ObjectMapper().writeValue(response.getOutputStream(), error);
				}
	        } else {
	        	response.setHeader("error", "Forbidden");
				response.setStatus(403);
				Map<String, Object> error=new HashMap<>();
				error.put("error", "Forbidden");
				error.put("status", new Integer(403));
		    	response.setContentType("application/json");
		    	new ObjectMapper().writeValue(response.getOutputStream(), error);
	        }
		}
	}
}
