package com.placement.authentication.jwt;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
//import com.placement.authentication.model.LoginData;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;

//        setFilterProcessesUrl(SecurityConstants.SIGN_IN_URL); 
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
//        try {
//            LoginCredentials creds = new ObjectMapper()
//                    .readValue(req.getInputStream(), LoginCredentials.class);
        	String username = req.getParameter("username");
        	String password = req.getParameter("password");
        	
        	UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
            return authenticationManager.authenticate(authenticationToken);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException {
        
    	User user = (User)auth.getPrincipal();
    	Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
    	String access_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
                .withIssuer(req.getRequestURL().toString())
                .sign(algorithm);
    	
    	String refresh_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 10*60*1000))
                .withIssuer(req.getRequestURL().toString())
                .sign(algorithm);

//    	res.setHeader("access_token", access_token);
//    	res.setHeader("refresh_token", refresh_token);
//        String body = ((LoginCredentials) auth.getPrincipal()).getEmail() + " " + token;

//        res.getWriter().write(body);
//        res.getWriter().flush();
    	Map<String, String> tokens=new HashMap<>();
    	tokens.put("access_token", access_token);
//    	tokens.put("refresh_token", refresh_token);
    	tokens.put("email", user.getUsername());
    	res.setContentType("application/json");
    	new ObjectMapper().writeValue(res.getOutputStream(), tokens);
    }
}