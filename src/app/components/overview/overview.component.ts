import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/models/complaint.model';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({  
  selector: 'app-overview',  
  templateUrl: './overview.component.html',  
  styleUrls: ['./overview.component.scss']  
})
export class OverviewComponent implements OnInit {

  complaints: Complaint[];
  user: User;

  isadmin:boolean = false;

  constructor(private complaintService:ComplaintService,
     private router: Router,
      private loggedUser: ShareDataService) { 

    this.user = loggedUser.getUser();
    this.complaints = [];
  }

  ngOnInit() {

    this.user = this.loggedUser.getUser();

    if(this.user._id != undefined){
      this.complaintService.getComplaintsByUser(this.user._id).subscribe( res => {
        this.complaints = res;
        console.log(res);
      },
      err => {
        if(err instanceof HttpErrorResponse){
          console.log(err.status);
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        } 
      });
    }
    
    // this.complaints = await this.complaintService.getAllComplaints().toPromise();
  }

}

