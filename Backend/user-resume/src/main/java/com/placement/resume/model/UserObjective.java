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
@Table(name="userobjective")
public class UserObjective {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
//	private long userId;
	private String objective;
//	private String declaration;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserPersonal personal;
	
	public UserObjective(UserPersonal personal, String objective) {
		super();
		this.personal = personal;
		this.objective = objective;
	}
	
	public UserObjective() {}
	
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
	public String getObjective() {
		return objective;
	}
	public void setObjective(String objective) {
		this.objective = objective;
	}
	
	
}
