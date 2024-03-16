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
@Table(name="userhobbies")
public class UserHobbies {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
//	private long userId;
	private String hobbies;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserPersonal personal;
	
	public UserHobbies(UserPersonal personal, String hobbies) {
		super();
		this.personal = personal;
		this.hobbies = hobbies;
	}
	
	public UserHobbies() {}
	
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
	public String getHobbies() {
		return hobbies;
	}
	public void setHobbies(String hobbies) {
		this.hobbies = hobbies;
	}
	
}
