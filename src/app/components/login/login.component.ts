import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  username:AbstractControl;
  password:AbstractControl;

  constructor(private fb: FormBuilder) { 

    this.form = fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];

  }

  ngOnInit(): void {
  }

}
