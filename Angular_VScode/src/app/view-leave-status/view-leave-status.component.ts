import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-view-leave-status',
  templateUrl: './view-leave-status.component.html',
  styleUrls: ['./view-leave-status.component.css']
})
export class ViewLeaveStatusComponent implements OnInit {

  leaves !: Leave[];

  constructor(private leaveservice: LeaveService,private router: Router,private employeeService : EmployeeService) { }

  ngOnInit(): void {
  
    this.getleavelist();
  
   }
 
   private getleavelist(){
     const currentUser =  this.employeeService.getCurrentEmployee();
     this.leaveservice.getleavelist().subscribe(data => {
       this.leaves = data;
      
     });

    }
  }