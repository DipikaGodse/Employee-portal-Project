import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-update-leavestatus',
  templateUrl: './update-leavestatus.component.html',
  styleUrls: ['./update-leavestatus.component.css']
})
export class UpdateLeavestatusComponent implements OnInit {

  leave_id!: number;
  leave: Leave = new Leave();


  constructor(private leaveservice: LeaveService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.leave_id = this.route.snapshot.params['leave_id'];

    this.leaveservice.getleaveById(this.leave_id).subscribe(data => {
      this.leave = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.leaveservice.updateleave(this.leave_id, this.leave).subscribe( data =>{
      this.goToLeavelist();
    }
    , error => console.log(error));
  }

  goToLeavelist(){
    alert("Updated Leave Status Successfully");
    this.router.navigate(['/viewleave']);
  }

}
