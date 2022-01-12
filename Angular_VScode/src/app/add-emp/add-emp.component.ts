import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  public addEmp !: FormGroup

  constructor(private formBuilder :FormBuilder) { }

  ngOnInit(): void {

    this.addEmp = this.formBuilder.group({
      name:['',Validators.required],
      lname:['',Validators.required]
    })
  }

  addemp(){
    alert("sucess");
  }

  
  }


