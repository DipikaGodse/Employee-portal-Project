import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  employee_details_id!: number
  employee!: Employee


  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
 
    
    this.employee_details_id = this.route.snapshot.params['employee_details_id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.employee_details_id).subscribe( data => {
      this.employee = data;
    });
  }

}