package com.employeePortal.demo.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.employeePortal.demo.entities.Employee;
import com.employeePortal.demo.exception.ResourceNotFoundException;
import com.employeePortal.demo.repository.EmployeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	//Get all Employee Details by employee_details_id
	@GetMapping
	public List<Employee> getAllEmployees() {
		return this.employeeRepository.findAll(); 
		}
	
	//Get Employee Details by employee_details_id
	@GetMapping("/{employee_details_id}")
	public Employee getUserById(@PathVariable (value = "employee_details_id") long empId) {
		return this.employeeRepository.findById(empId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" +empId));
	}
	
	//Create Employee Details by employee_details_id
	@PostMapping
	public Employee createUser(@RequestBody Employee employee) {
		return this.employeeRepository.save(employee);
	}
	
	//Update Employee Details by employee_details_id
	@PutMapping("/{employee_details_id}")
	public Employee updateUser(@RequestBody Employee employee, @PathVariable ("employee_details_id") long empId) {
		Employee existingEmployee = this.employeeRepository.findById(empId)
		.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" +empId));
		existingEmployee.setUseranme(employee.getUseranme());
		existingEmployee.setPassword(employee.getPassword());
		existingEmployee.setFirstName(employee.getFirstName());
		existingEmployee.setLastName(employee.getLastName());
		existingEmployee.setAddress(employee.getAddress());
		existingEmployee.setMobileNo(employee.getMobileNo());
		existingEmployee.setDob(employee.getDob());
		existingEmployee.setEmail(employee.getEmail());
		existingEmployee.setGender(employee.getGender());
		existingEmployee.setDepartment(employee.getDepartment());
		existingEmployee.setDateOfJoin(employee.getDateOfJoin());
		existingEmployee.setDesignation(employee.getDesignation());
	    return this.employeeRepository.save(existingEmployee);	
	}
	
	//delete employee by id 
	//retrieve exiting employee object by id from database and then delete
	@DeleteMapping("/{employee_details_id}")
	public ResponseEntity<Employee> deleteUser(@PathVariable ("employee_details_id") long empId) {
		Employee existingEmployee = this.employeeRepository.findById(empId)
		.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" +empId));
	  this.employeeRepository.delete(existingEmployee);
	  return ResponseEntity.ok().build();		
	}
	

}


