import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exit } from '../exit';
import { ExitService } from '../exit.service';

@Component({
  selector: 'app-view-exit-status',
  templateUrl: './view-exit-status.component.html',
  styleUrls: ['./view-exit-status.component.css']
})
export class ViewExitStatusComponent implements OnInit {

 
  
  exits !: Exit[];

  constructor(private exitservice: ExitService,private router: Router) { }

  ngOnInit(): void {
 
    this.getexitlist();
  
   }
 
   private getexitlist(){
     this.exitservice.getexitlist().subscribe(data => {
       this.exits = data;
      
     });

    }
  }