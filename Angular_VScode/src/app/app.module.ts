import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewLeaveapplicationComponent } from './view-leaveapplication/view-leaveapplication.component';
import { ViewExitapplicationComponent } from './view-exitapplication/view-exitapplication.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApplyExitComponent } from './apply-exit/apply-exit.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { UpdateLeavestatusComponent } from './update-leavestatus/update-leavestatus.component';
import { ViewLeaveStatusComponent } from './view-leave-status/view-leave-status.component';
import { UpdateExitStatusComponent } from './update-exit-status/update-exit-status.component';
import { ViewExitStatusComponent } from './view-exit-status/view-exit-status.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { EmpDComponent } from './emp-d/emp-d.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AddEmpComponent,
    ViewLeaveapplicationComponent,
    ViewExitapplicationComponent,
    ApplyLeaveComponent,
    ApplyExitComponent,
    ErrorComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    AdminMainComponent,
    EmpLoginComponent,
    EmpDashboardComponent,
    UpdateLeavestatusComponent,
    ViewLeaveStatusComponent,
    UpdateExitStatusComponent,
    ViewExitStatusComponent,
    FrontPageComponent,
    EmpDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
