import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Region } from 'src/app/models/region.model';
import { RegionService } from 'src/app/services/region/region.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regions: Region[];
  currentRegion: Region;

  form:FormGroup;
  name:AbstractControl;
  lastname:AbstractControl;
  surname:AbstractControl;
  rut:AbstractControl;
  address:AbstractControl;
  district:AbstractControl;
  username:AbstractControl;
  password:AbstractControl;
  confirmPassword:AbstractControl;

  constructor(private fb: FormBuilder,
     private regionService: RegionService,
      private authService: AuthService,
       private userService: UserService,
        private router: Router,
          private loggedUser:ShareDataService) {

    let newRegion: Region = { name:"default", districts: [] }
    this.currentRegion = newRegion;

    this.regions = [];

    /* form group */
    this.form = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      surname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      rut:['', [Validators.required, Validators.minLength(9), Validators.maxLength(10), Validators.pattern(/^[0-9]+-[0-9kK]{1}$/)]],
      address:['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      district:['', [Validators.required]],
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password:['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/)]],
      confirmPassword: ['']
    },{validator: this.checkIfMatchingPasswords('password', 'confirmPassword')});

    this.name = this.form.controls['name'];
    this.lastname = this.form.controls['lastname'];
    this.surname = this.form.controls['surname'];
    this.rut = this.form.controls['rut'];
    this.address = this.form.controls['address'];
    this.district = this.form.controls['district'];
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.confirmPassword = this.form.controls['confirmPassword'];

   }

  async ngOnInit(): Promise<void> {
    this.regions = await this.regionService.getAllRegions().toPromise();
  }

  registerUser(){

    let _name = this.name.value;
    let _lastname = this.lastname.value;
    let _surname = this.surname.value;
    let _rut = this.rut.value;
    let _address = this.address.value;
    let _region = this.currentRegion.name;
    let _district = this.district.value;
    let _username = this.username.value;
    let _password = this.password.value;

    let user: User = {
      name: _name,
      lastName: _lastname,
      surName: _surname,
      rut: _rut,
      address: _address,
      region: _region,
      district: _district,
      username: _username,
      password: _password,
      isAdmin: false
    }

    this.authService.registerUser(user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.addNewLoggedUser(_username);
      },
      err => console.log(err)

    );
  }

  async addNewLoggedUser(username: string){
    let user: any = await this.userService.getUserByUsername(username).toPromise()
    this.loggedUser.setUser(user);
    this.navigateTo("overview");
  }

  navigateTo(route: string): void{
    this.router.navigate([`/${route}`]);
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {

    return (group: FormGroup) => {

      let passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordInput.value !== passwordConfirmationInput.value) {

        return passwordConfirmationInput.setErrors({notEquivalent: true})

      }
      else {

          return passwordConfirmationInput.setErrors(null);

      }

    }

  }

}
