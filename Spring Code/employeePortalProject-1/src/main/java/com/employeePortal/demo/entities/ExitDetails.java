package com.employeePortal.demo.entities;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name = "exitDetails")
public class ExitDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long exit_id;
	
	@Column(name = "feedback")
	private String feedback;
	
	@JsonFormat(pattern ="yyyy-MM-dd", shape= Shape.STRING)
	@Column(name = "date_of_exit")
	private Date dateOfExit;
	
	@Column(name = "exit_reason")
	private String exitReason;
	
	@Column(name = "exit_status")
	private String exitStatus;

	public ExitDetails() {
		super();
		
	}
	
	public ExitDetails(String feedback, Date dateOfExit, String exitReason, String exitStatus) {
		super();
		this.feedback = feedback;
		this.dateOfExit = dateOfExit;
		this.exitReason = exitReason;
		this.exitStatus = exitStatus;
		
	}

	public long getExit_id() {
		return exit_id;
	}

	public void setExit_id(long exit_id) {
		this.exit_id = exit_id;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public Date getDateOfExit() {
		return dateOfExit;
	}

	public void setDateOfExit(Date dateOfExit) {
		this.dateOfExit = dateOfExit;
	}

	public String getExitReason() {
		return exitReason;
	}

	public void setExitReason(String exitReason) {
		this.exitReason = exitReason;
	}

	public String getExitStatus() {
		return exitStatus;
	}

	public void setExitStatus(String exitStatus) {
		this.exitStatus = exitStatus;
	}
	
}
