import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-view-leaveapplication',
  templateUrl: './view-leaveapplication.component.html',
  styleUrls: ['./view-leaveapplication.component.css']
})
export class ViewLeaveapplicationComponent implements OnInit {

 
  
  leaves !: Leave[];

  constructor(private leaveservice: LeaveService,private router: Router) { }

  ngOnInit(): void {
 
    this.getleavelist();
  
   }
 
   private getleavelist(){
     this.leaveservice.getleavelist().subscribe(data => {
       this.leaves = data;
      
     });

    }
    updateleave(leave_id: number){
      this.router.navigate(['ue', leave_id]);
    }
  }