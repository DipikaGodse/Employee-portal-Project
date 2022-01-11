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
@Table(name="leave_details")
public class LeaveDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long leave_id;
	
	@Column
	private String leaveReason;
	
	@Column
	private String description;
	
	@JsonFormat(pattern ="yyyy-MM-dd", shape= Shape.STRING)
	@Column
	private Date FromDate;

	@JsonFormat(pattern ="yyyy-MM-dd", shape= Shape.STRING)
	@Column
	private Date ToDate;
	
	@Column(name = "leave_status")
	private String leaveStatus;

	public LeaveDetails() {
		
	}
	
	public LeaveDetails(String leaveReason, String description, Date fromDate, Date toDate, Date createdAt,
			String updatedBy, String leaveStatus) {
		super();
		this.leaveReason = leaveReason;
		this.description = description;
		FromDate = fromDate;
		ToDate = toDate;
		this.leaveStatus = leaveStatus;
	}

	public long getLeave_id() {
		return leave_id;
	}

	public void setLeave_id(long leave_id) {
		this.leave_id = leave_id;
	}

	public String getLeaveReason() {
		return leaveReason;
	}

	public void setLeaveReason(String leaveReason) {
		this.leaveReason = leaveReason;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getFromDate() {
		return FromDate;
	}

	public void setFromDate(Date fromDate) {
		FromDate = fromDate;
	}

	public Date getToDate() {
		return ToDate;
	}

	public void setToDate(Date toDate) {
		ToDate = toDate;
	}

	public String getLeaveStatus() {
		return leaveStatus;
	}

	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}
	
}
