import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Exit } from '../exit';
import { ExitService } from '../exit.service';

@Component({
  selector: 'app-apply-exit',
  templateUrl: './apply-exit.component.html',
  styleUrls: ['./apply-exit.component.css']
})
export class ApplyExitComponent implements OnInit {

 
  
  exit: Exit = new Exit();
 
  constructor(private exitservice: ExitService,private router: Router) { }

  ngOnInit(): void {
  }
  saveexit(){
    this.exitservice.createleave(this.exit).subscribe( data =>{
      console.log(data);
      this.goToexitlist();
    },
    error => console.log(error));
  }

  goToexitlist(){
    alert(" Applied Successfully");
    this.router.navigate(['/employeedashboard']);
  }
  
  onSubmit(){
    console.log(this.exit);
    this.saveexit();
   
  }

}
