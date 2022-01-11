package com.employeePortal.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeePortal.demo.entities.EmployeeLogin;
import com.employeePortal.demo.entities.User;
import com.employeePortal.demo.exception.ResourceNotFoundException;
import com.employeePortal.demo.repository.EmployeeLoginRepository;
import com.employeePortal.demo.dao.Test;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee/login")
public class EmployeeLoginController {

	
	@Autowired
	private Test test ;
	
	
	@Autowired
	private EmployeeLoginRepository employeeLoginRepository;
	
	//Get all Employee Login details  
	@GetMapping
	public List<EmployeeLogin> getAllLeave() {
		return this.employeeLoginRepository.findAll(); 
	}
	
	
	//Get Employee Login Details by emp_id
	@GetMapping("/{emp_id}")
	public EmployeeLogin getUserById(@PathVariable (value = "emp_id") long empId) {
		System.out.println("Working"+test.getDetails());
		return this.employeeLoginRepository.findById(empId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Login Details not found with id :" +empId));
	}
	
	//Create Employee Login Details 
		@PostMapping
		public EmployeeLogin createEmplyeeLogin(@RequestBody EmployeeLogin employeeLogin) {
			return this.employeeLoginRepository.save(employeeLogin);
		}
	
	//Update Employee Login Details 
	@PutMapping("/{emp_id}")
	public EmployeeLogin updateEmployeeLogin(@RequestBody EmployeeLogin employeeLogin, @PathVariable ("emp_id") long empId) {
		EmployeeLogin existingEmployeeLogin = this.employeeLoginRepository.findById(empId)
		.orElseThrow(() -> new ResourceNotFoundException("login details not found with id :" +empId));
		existingEmployeeLogin.setUseranme(employeeLogin.getUseranme());
		existingEmployeeLogin.setPassword(employeeLogin.getPassword());
	
		
	 return this.employeeLoginRepository.save(existingEmployeeLogin);
		
	}
	
	//Delete Employee Login Details by emp_id
	//Retrieve exiting Employee Login Details by id from database and then delete we it
		@DeleteMapping("/{emp_id}")
		public ResponseEntity<User> deleteUser(@PathVariable ("emp_id") long empId) {
			EmployeeLogin existingEmployeeLogin = this.employeeLoginRepository.findById(empId)
			.orElseThrow(() -> new ResourceNotFoundException("Employee Login not found with id :" +empId));
		  this.employeeLoginRepository.delete(existingEmployeeLogin);
		  return ResponseEntity.ok().build();		
		}	
}
