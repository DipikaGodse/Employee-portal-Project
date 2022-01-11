package com.employeePortal.demo.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employeeLogin")
public class EmployeeLogin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "emp_id")
	private long emp_id;

	@Column(name = "username")
	private String useranme;
	
	@Column(name = "password")
	private String password;

	public EmployeeLogin() {
		
	}
	
	public EmployeeLogin(String useranme, String password) {
		super();
		this.useranme = useranme;
		this.password = password;
	}

	public long getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(long emp_id) {
		this.emp_id = emp_id;
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
	
	@Override
	public String toString() {
		return "EmployeeLogin [emp_id=" + emp_id + ", useranme=" + useranme + ", password=" + password + "]";
	}
	
	
	
}
