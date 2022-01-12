import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-d',
  templateUrl: './emp-d.component.html',
  styleUrls: ['./emp-d.component.css']
})
export class EmpDComponent implements OnInit {
  employee_details_id!: number
  employee!: Employee
  constructor(private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeService.getCurrentEmployee();
  }

}
