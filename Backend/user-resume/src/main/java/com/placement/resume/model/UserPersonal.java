package com.placement.resume.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.quiz.model.Question;

import lombok.AllArgsConstructor;
import lombok.Data;
//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="userpersonal")
public class UserPersonal {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String fullName;
	private String email;
	private String jobTitle;
	private String address;
	private long phone;
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
    private Set<UserHobbies> userHobby = new HashSet<>();
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<UserObjective> userObjective = new HashSet<>();
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<UserSkills> userSkills = new HashSet<>();
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<UserSocialLink> userSocialLink = new HashSet<>();
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<UserEducation> userEducation = new HashSet<>();
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<UserExperience> userExperience = new HashSet<>();
	
	@OneToMany(mappedBy = "personal",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<UserProject> userProject = new HashSet<>();
	
//	private byte[] prf_pic;
	public UserPersonal(long id, String fullName, String email, String jobTitle, String address, long phone) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.jobTitle= jobTitle;
		this.address = address;
		this.phone = phone;
	}




	public UserPersonal() {}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
}
