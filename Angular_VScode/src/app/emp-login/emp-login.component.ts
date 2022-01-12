import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

 
  
  public loginForm !: FormGroup
  employees !: Employee[];
 

  constructor(private formBuilder :FormBuilder,  private http : HttpClient, private router:Router, private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      usertype:['Admin',Validators.required]
    })
  }

  loginemp(){

    this.http.get<any>("http://localhost:8080/api/employee")
    .subscribe(res=>{
      const user = res.find((employee:any)=>{
        return employee.email === this.loginForm.value.email && employee.password === this.loginForm.value.password
      });
      if(user){
        alert("login sucess");
        this.loginForm.reset();
        this.employeeservice.getEmployeeById(user.employee_details_id).subscribe((response : Employee)=>{
          console.log(response);
          this.employeeservice.setCurrentEmployee(response);
        })
        
        this.router.navigate(['employeedashboard']);
      }else{
        alert("login error");
      }
    },err=>{
      alert("someting went wrong!!")
    })
  }

  loginadmin(){

    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("login sucess");
        this.loginForm.reset();
        this.router.navigate(['wel'])
      }else{
        alert("login error");
      }
    },err=>{
      alert("someting went wrong!!")
    })
  }


   mainlogin(){
     const usertype=this.loginForm.value.usertype;

     if(usertype === "Admin"){

      this.loginadmin();
     }

     else{
      this.loginemp();

     }



   }

  employeeDetails(employee_details_id: number){
    alert(employee_details_id);
    this.router.navigate(['empdetails', employee_details_id]);
  }

}
 
 
 
 
 
 
 
