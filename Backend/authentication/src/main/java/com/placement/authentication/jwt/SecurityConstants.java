package com.placement.authentication.jwt;

public class SecurityConstants {

	  public static final String SECRET = "SECRET_KEY";
	  public static final long EXPIRATION_TIME = 24*60*60*1000; 
	  public static final String TOKEN_PREFIX = "Bearer ";
	  public static final String HEADER_STRING = "Authorization";
	  public static final String HEADER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmNkZWZAY29nLmluIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDg3L2xvZ2luIiwiZXhwIjoxNjU0OTI4MzA1fQ.mOHJbvXuzQqKXbp83IVXJrwPM4-_fdblW36KR-4kWGE";
	  public static final String SIGN_IN_URL = "/authentication-service/authentication/**";
	  public static final String SIGN_UP_URL = "/authentication-service/authentication/register";
	}
