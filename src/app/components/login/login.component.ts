import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';
// import { User } from 'backend/src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  username:AbstractControl;
  password:AbstractControl;

  constructor(private fb: FormBuilder,
     private authService: AuthService,
      private router:Router,
       private userService: UserService,
        private loggedUser: ShareDataService) { 

    this.form = fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];

  }

  ngOnInit():void { }

  login() {
    let _username:string = this.username.value;
    let _password:string = this.password.value;
    
    let userData: Object = {
      username: _username,
      password: _password
    }
    
    this.authService.login(userData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.addNewLoggedUser(_username);
        console.log(res);
      },
      (error) => {
        this.mostrarAlert();
        console.log(error);
      }
    );
  }

  async addNewLoggedUser(username: string){
    let _user: any = await this.userService.getUserByUsername(username).toPromise();
    this.loggedUser.setUser(_user);
    this.navitageTo("overview");
  }

  navitageTo(route: string): void{
    this.router.navigate([`/${route}`]);
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
