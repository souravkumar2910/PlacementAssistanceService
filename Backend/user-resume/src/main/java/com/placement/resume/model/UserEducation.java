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
@Table(name="usereducation")
public class UserEducation {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserPersonal personal;
	
	private String course;
	private String collegeName;
	private String universityName;
	private String stream;
	private double score;
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
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
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
	public String getUniversityName() {
		return universityName;
	}
	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	public UserEducation(UserPersonal personal, String course, String collegeName, String universityName, String stream, double score, String startDate, String endDate) {
		super();
		this.personal = personal;
		this.course = course;
		this.collegeName = collegeName;
		this.universityName = universityName;
		this.stream = stream;
		this.score=score;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	public UserEducation() {}
}
