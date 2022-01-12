import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/employee";
 private currenemployee!: Employee;
  constructor(private httpClient: HttpClient) { }


  getEmployeesList(): Observable<Employee[]>{
    // alert(this.baseURL);
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  getEmployeeById(employee_details_id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employee_details_id}`);
  }
  updateEmployee(employee_details_id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${employee_details_id}`, employee);
  }

  deleteEmployee(employee_details_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${employee_details_id}`);
  }

  setCurrentEmployee(employee:Employee){
   this.currenemployee=employee;

  }
  getCurrentEmployee() : Employee{
    return this.currenemployee;
 
   }
}
