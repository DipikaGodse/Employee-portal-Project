import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';
import { Leave } from '../leave';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  
  leave: Leave = new Leave();
 
  constructor(private leaveservice: LeaveService,private router: Router) { }

  ngOnInit(): void {
  }
  saveleave(){
    this.leaveservice.createleave(this.leave).subscribe( data =>{
      console.log(data);
      this.goToLeavelist();
    },
    error => console.log(error));
  }

  goToLeavelist(){
    alert("Applied Successfully");
    this.router.navigate(['/employeedashboard']);
  }
  
  onSubmit(){
    console.log(this.leave);
    this.saveleave();
   
  }

}
