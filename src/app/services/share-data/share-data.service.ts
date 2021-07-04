import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private user = {
      name: "",
      lastName: "",
      surName: "",
      rut: "",
      address: "",
      region: "",
      district: "",
      username: "",
      password: "",
      isAdmin: false
    
  }

  constructor() { }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User{
    return this.user;
  }


}
