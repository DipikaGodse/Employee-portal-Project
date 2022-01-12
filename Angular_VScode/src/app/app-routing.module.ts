import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewLeaveapplicationComponent } from './view-leaveapplication/view-leaveapplication.component';
import { ViewExitapplicationComponent } from './view-exitapplication/view-exitapplication.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApplyExitComponent } from './apply-exit/apply-exit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { UpdateLeavestatusComponent } from './update-leavestatus/update-leavestatus.component';
import { ViewLeaveStatusComponent } from './view-leave-status/view-leave-status.component';
import { UpdateExitStatusComponent } from './update-exit-status/update-exit-status.component';
import { ViewExitStatusComponent } from './view-exit-status/view-exit-status.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { EmpDComponent } from './emp-d/emp-d.component';

const routes: Routes = [
  {path:'',redirectTo:'employeelogin', pathMatch:'full'},
  {path:'wel',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'addemp',component:AddEmpComponent},
  {path:'viewleave',component:ViewLeaveapplicationComponent},
  {path:'viewexit',component:ViewExitapplicationComponent},
  {path:'applyleave',component:ApplyLeaveComponent},
  {path:'applyexit',component:ApplyExitComponent},
  {path:'main',component:EmployeeListComponent},
  {path:'createemp',component:CreateEmployeeComponent},
  {path:'updateemp/:employee_details_id',component:UpdateEmployeeComponent},
  {path:'empdetails/:employee_details_id',component:EmployeeDetailsComponent},
  {path:'employeelogin',component:EmpLoginComponent},
  {path:'employeedashboard',component:EmpDashboardComponent},
  {path:'ue/:leave_id',component:UpdateLeavestatusComponent},
  {path:'vls',component:ViewLeaveStatusComponent},
  {path:'updateexitstatus/:exit_id',component:UpdateExitStatusComponent},
  {path:'viewexitstatus',component:ViewExitStatusComponent},
  {path:'empd',component:EmpDComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
