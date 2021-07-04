import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Complaint } from 'src/app/models/complaint.model';
import { User } from 'src/app/models/user.model';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {

  form:FormGroup;
  category:AbstractControl;
  subject:AbstractControl;
  description:AbstractControl;
  priority:AbstractControl;

  //hay que reemplazar por el otro servicio
  constructor(private fb: FormBuilder,
     private complaintService: ComplaintService, 
      private loggedUser: ShareDataService) { 

    /* form group */
    this.form = this.fb.group({
      category:['', [Validators.required]],
      subject:['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      description:['', [Validators.required, Validators.minLength(20), Validators.maxLength(300)]],
      priority:['', [Validators.required]],
    });

    this.category = this.form.controls['category'];
    this.subject = this.form.controls['subject'];
    this.description = this.form.controls['description'];
    this.priority = this.form.controls['priority'];

  }

  ngOnInit() { }

  createComplaint(){

    category:AbstractControl;
    subject:AbstractControl;
    description:AbstractControl;
    priority:AbstractControl;

    let _userid = "";
    let user: User = this.loggedUser.getUser();
    if(user._id != undefined){
      _userid = user._id;
    }

    if(_userid == "") return;
      
    let _category = this.category.value;
    let _subject = this.subject.value;
    let _description = this.description.value;
    let _priority = this.priority.value;

    let complaint: Complaint = {
      userid: _userid,
      category: _category,
      subject: _subject,
      description: _description,
      priority: _priority
    }

    this.complaintService.createComplaint(complaint).subscribe(
      res => {
        console.log(res)
        this.mostrarAlert();
      },
      err => console.log(err)
    );

  }

  mostrarAlert(){
    let alert:any;
    alert = document.getElementById("alert-contacto-agregado");
    if(alert.classList.contains("d-none")){
      alert.classList.toggle("d-none");
    }
    
  }

  cerrarAlert(){
    let alert:any;
    alert = document.getElementById("alert-contacto-agregado");
    alert.classList.toggle("d-none");
  }

}
