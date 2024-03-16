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
@Table(name="userexperience")
public class UserExperience {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserPersonal personal;
	
	private String compName;
	private String projTitle;
	private String startDate;
	private String endDate;
	private String compProjDesc;
	
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
	public String getCompName() {
		return compName;
	}
	public void setCompName(String compName) {
		this.compName = compName;
	}
	public String getProjTitle() {
		return projTitle;
	}
	public void setProjTitle(String projTitle) {
		this.projTitle = projTitle;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getCompProjDesc() {
		return compProjDesc;
	}
	public void setCompProjDesc(String compProjDesc) {
		this.compProjDesc = compProjDesc;
	}
	public UserExperience(UserPersonal personal, String compName, String projTitle, String startDate, String endDate,String compProjDesc) {
		super();
		this.personal = personal;
		this.compName = compName;
		this.projTitle = projTitle;
		this.startDate = startDate;
		this.endDate = endDate;
		this.compProjDesc = compProjDesc;
	}
	
	public UserExperience() {}
}
