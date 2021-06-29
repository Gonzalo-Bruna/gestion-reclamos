import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/models/complaint.model';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';

@Component({  
  selector: 'app-overview',  
  templateUrl: './overview.component.html',  
  styleUrls: ['./overview.component.scss']  
})
export class OverviewComponent implements OnInit {

  complaints: Complaint[];

  isadmin:boolean = false;

  constructor(private complaintService:ComplaintService) { 
    this.complaints = [];
  }

  async ngOnInit(): Promise<void> {
    this.complaints = await this.complaintService.getAllComplaints().toPromise();
  }

}

