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
import com.employeePortal.demo.entities.LeaveDetails;
import com.employeePortal.demo.exception.ResourceNotFoundException;
import com.employeePortal.demo.repository.LeaveDetailsRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/leaveDetails")
public class LeaveDetailsController {


	@Autowired
	private LeaveDetailsRepository leaveDetailsRepository;
	
	//Get all leave details  
	@GetMapping
	public List<LeaveDetails> getAllLeave() {
		return this.leaveDetailsRepository.findAll(); //findAll return list of user objects
		}
	
	//Get Leave Details by leave_id
	@GetMapping("/{leave_id}")
	public LeaveDetails getUserById(@PathVariable (value = "leave_id") long leaveId) {
		return this.leaveDetailsRepository.findById(leaveId)
				.orElseThrow(() -> new ResourceNotFoundException("Leave Details not found with id :" +leaveId));
	}
	
	//Create Leave Details 
		@PostMapping
		public LeaveDetails createLeaveDetails(@RequestBody LeaveDetails leaveDetails) {
			return this.leaveDetailsRepository.save(leaveDetails);
		}
	
	//Update Leave Details 
	@PutMapping("/{leave_id}")
	public LeaveDetails updateLeaveDetails(@RequestBody LeaveDetails leaveDetails, @PathVariable ("leave_id") long leaveId) {
		LeaveDetails existingLeaveDetails = this.leaveDetailsRepository.findById(leaveId)
		.orElseThrow(() -> new ResourceNotFoundException("Leave not found with id :" +leaveId));
		existingLeaveDetails.setLeaveReason(leaveDetails.getLeaveReason());
		existingLeaveDetails.setDescription(leaveDetails.getDescription());
		existingLeaveDetails.setFromDate(leaveDetails.getFromDate());
		existingLeaveDetails.setToDate(leaveDetails.getToDate());
		existingLeaveDetails.setLeaveStatus(leaveDetails.getLeaveStatus());
		return this.leaveDetailsRepository.save(existingLeaveDetails);
		
	}
	
	//Delete Leave Details by leave_id
	//Retrieve exiting Leave Details id from database and then delete that record
	@DeleteMapping("/{leave_id}")
	public ResponseEntity<LeaveDetails> deleteUser(@PathVariable ("leave_id") long leaveId) {
		LeaveDetails existingLeaveDetails = this.leaveDetailsRepository.findById(leaveId)
		.orElseThrow(() -> new ResourceNotFoundException("Leave not found with id :" +leaveId));
	  this.leaveDetailsRepository.delete(existingLeaveDetails);
	  return ResponseEntity.ok().build();		
	}
}
