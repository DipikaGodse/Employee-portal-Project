import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exit } from '../exit';
import { ExitService } from '../exit.service';

@Component({
  selector: 'app-view-exitapplication',
  templateUrl: './view-exitapplication.component.html',
  styleUrls: ['./view-exitapplication.component.css']
})
export class ViewExitapplicationComponent implements OnInit {

 
  
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

    updateexit(exit_id: number){
      this.router.navigate(['updateexitstatus', exit_id]);
    }

  }