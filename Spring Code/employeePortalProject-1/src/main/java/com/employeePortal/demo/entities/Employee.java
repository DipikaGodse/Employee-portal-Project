package com.employeePortal.demo.entities;
import java.util.Date;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name="employee_details")
public class Employee {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long employee_details_id;
		
		@Column(name = "username")
		private String useranme;
		
		@Column(name = "password")
		private String password;
		
		@Column
		private String firstName;
		
		@Column
		private String lastName;
		
		@Column
		private String address;
		
		@Column
	    private long mobileNo;
		
		@JsonFormat(pattern ="yyyy-MM-dd", shape= Shape.STRING)
		@Column
		private Date dob;  
		
		@Column
		private String email;
	
		@Column
		private String gender;
		
		@Column
		private String department;
		
		@JsonFormat(pattern ="yyyy-MM-dd", shape= Shape.STRING)
		@Column
		private Date dateOfJoin;
		
		@Column
		private String designation;
		
		public Employee() {
			
		}
		
		public Employee(String firstName, String lastName, String address, long mobileNo, Date dob, String email,
				  Date dateOfJoin, String designation, String useranme, String password, String gender, String department) {
			super();
			this.useranme = useranme;
			this.password = password;
			this.firstName = firstName;
			this.lastName = lastName;
			this.address = address;
			this.mobileNo = mobileNo;
			this.dob = dob;
			this.email = email;
			this.gender = gender;
			this.department = department;
			this.dateOfJoin = dateOfJoin;
			this.designation = designation;
		}
		
		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public String getDepartment() {
			return department;
		}

		public void setDepartment(String department) {
			this.department = department;
		}

		public String getUseranme() {
			return useranme;
		}

		public void setUseranme(String useranme) {
			this.useranme = useranme;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		
		public String getFirstName() {
			return firstName;
		}

		public long getEmployee_details_id() {
			return employee_details_id;
		}

		public void setEmployee_details_id(long employee_details_id) {
			this.employee_details_id = employee_details_id;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public long getMobileNo() {
			return mobileNo;
		}

		public void setMobileNo(long mobileNo) {
			this.mobileNo = mobileNo;
		}

		public Date getDob() {
			return dob;
		}

		public void setDob(Date dob) {
			this.dob = dob;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

	
		public Date getDateOfJoin() {
			return dateOfJoin;
		}

		public void setDateOfJoin(Date dateOfJoin) {
			this.dateOfJoin = dateOfJoin;
		}

		public String getDesignation() {
			return designation;
		}

		public void setDesignation(String designation) {
			this.designation = designation;
		}

	}
