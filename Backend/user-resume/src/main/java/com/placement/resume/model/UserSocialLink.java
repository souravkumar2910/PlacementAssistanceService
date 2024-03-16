package com.placement.resume.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="usersociallink")
public class UserSocialLink {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
//	private long userId;
	private String fb;
	private String linkd;
	private String codePlatform;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserPersonal personal;
	
	public UserSocialLink(UserPersonal personal, String fb, String linkd, String codePlatform) {
		super();
		this.personal = personal;
		this.fb = fb;
		this.linkd = linkd;
		this.codePlatform = codePlatform;
	}
	
	public UserSocialLink() {}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public UserPersonal getPersonal() {
		return personal;
	}
	public void setPersonal(UserPersonal personal) {
		this.personal = personal;
	}
	public String getFb() {
		return fb;
	}
	public void setFb(String fb) {
		this.fb = fb;
	}
	public String getLinkd() {
		return linkd;
	}
	public void setLinkd(String linkd) {
		this.linkd = linkd;
	}
	public String getCodePlatform() {
		return codePlatform;
	}
	public void setCodePlatform(String codePlatform) {
		this.codePlatform = codePlatform;
	}
	
	
}
