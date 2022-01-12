import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exit } from '../exit';
import { ExitService } from '../exit.service';

@Component({
  selector: 'app-update-exit-status',
  templateUrl: './update-exit-status.component.html',
  styleUrls: ['./update-exit-status.component.css']
})
export class UpdateExitStatusComponent implements OnInit {

 
  

  exit_id!: number;
  exit: Exit = new Exit();


  constructor(private exitservice: ExitService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.exit_id = this.route.snapshot.params['exit_id'];

    this.exitservice.getleaveById(this.exit_id).subscribe(data => {
      this.exit = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.exitservice.updateleave(this.exit_id, this.exit).subscribe( data =>{
      this.goToExitlist();
    }
    , error => console.log(error));
  }

  goToExitlist(){
    alert("Exit Status Updated Successfully");
    this.router.navigate(['/viewexit']);
  }

}
