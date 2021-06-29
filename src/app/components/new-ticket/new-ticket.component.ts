import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Complaint } from 'src/app/models/complaint.model';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';

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
  constructor(private fb: FormBuilder, private complaintService: ComplaintService) { 

    /* form group */
    this.form = this.fb.group({
      category:['', [Validators.required]],
      subject:['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      description:['', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]],
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

    let _category = this.category.value;
    let _subject = this.subject.value;
    let _description = this.description.value;
    let _priority = this.priority.value;

    let complaint: Complaint = {
      userid: "60da8eea50a00731886b3c41",
      category: _category,
      subject: _subject,
      description: _description,
      priority: _priority
    }

    console.log(complaint);

    this.complaintService.createComplaint(complaint).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

  }

}
