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

import com.employeePortal.demo.entities.ExitDetails;
import com.employeePortal.demo.exception.ResourceNotFoundException;
import com.employeePortal.demo.repository.ExitDetailsRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee/exitDetails")
public class ExitDetailsController {

	
	@Autowired
	private ExitDetailsRepository exitDetailsRepository;
	
	//Get all Employee Exit Details   
	@GetMapping
	public List<ExitDetails> getAllExitDetails() {
		return this.exitDetailsRepository.findAll(); //findAll return list of  user objects
		}
	
	//Get Employee Exit Details by exit_id
	@GetMapping("/{exit_id}")
	public ExitDetails getExitDetailsById(@PathVariable (value = "exit_id") long exitId) {
		return this.exitDetailsRepository.findById(exitId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Exit Details not found with id :" +exitId));
	}
	
	//Create Employee Exit Details 
		@PostMapping
		public ExitDetails createEmplyeeLogin(@RequestBody ExitDetails exitDetails) {
			return this.exitDetailsRepository.save(exitDetails);
		}
	
	//Update Employee Exit Details 
	@PutMapping("/{exit_id}")
	public ExitDetails updateExitDetails(@RequestBody ExitDetails exitDetails, @PathVariable ("exit_id") long exitId) {
		ExitDetails existingExitDetails = this.exitDetailsRepository.findById(exitId)
		.orElseThrow(() -> new ResourceNotFoundException(" Exit Details  details not found with id :" +exitId));
		existingExitDetails.setFeedback(exitDetails.getFeedback());
		existingExitDetails.setDateOfExit(exitDetails.getDateOfExit());
		existingExitDetails.setExitReason(exitDetails.getExitReason());
		existingExitDetails.setExitStatus(exitDetails.getExitStatus());
	
	 return this.exitDetailsRepository.save(existingExitDetails);
		
	}
	
	//Delete Employee Exit Details by id 
	//retrieve exiting Employee Exit Details by id from database and then delete the record
		@DeleteMapping("/{exit_id}")
		public ResponseEntity<ExitDetails> deleteExitDetails(@PathVariable ("exit_id") long exitId) {
			 ExitDetails  existingExitDetails = this.exitDetailsRepository.findById(exitId)
			.orElseThrow(() -> new ResourceNotFoundException("Employee Login not found with id :" +exitId));
		  this.exitDetailsRepository.delete(existingExitDetails);
		  return ResponseEntity.ok().build();		
	}	
}
