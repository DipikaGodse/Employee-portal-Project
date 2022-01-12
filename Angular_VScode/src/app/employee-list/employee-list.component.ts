import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees !: Employee[];

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    
    this.getEmployees();
  
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
     
    });

  
  }
  updateEmployee(employee_details_id: number){
    this.router.navigate(['updateemp', employee_details_id]);
  }

  employeeDetails(employee_details_id: number){
    this.router.navigate(['empdetails', employee_details_id]);
  }

  deleteEmployee(employee_details_id: number){
    this.employeeService.deleteEmployee(employee_details_id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  }



