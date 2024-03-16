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
@Table(name="userproject")
public class UserProject {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserPersonal personal;
	
	private String projTitle;
	private String projDesc;
	private String skillUsed;
	private String startDate;
	private String endDate;
	
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
	public String getProjTitle() {
		return projTitle;
	}
	public void setProjTitle(String projTitle) {
		this.projTitle = projTitle;
	}
	public String getProjDesc() {
		return projDesc;
	}
	public void setProjDesc(String projDesc) {
		this.projDesc = projDesc;
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
	
	public String getSkillUsed() {
		return skillUsed;
	}
	public void setSkillUsed(String skillUsed) {
		this.skillUsed = skillUsed;
	}
	public UserProject(UserPersonal personal, String projTitle, String projDesc, String skillUsed, String startDate, String endDate) {
		super();
		this.personal = personal;
		this.projTitle = projTitle;
		this.projDesc = projDesc;
		this.skillUsed = skillUsed;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	public UserProject() {}
}
