import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from 'src/app/models/user.model';
import { ShareDataService } from '../share-data/share-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //calls the registration url, so it calls the api users to register a new user
  private registerUrl:string = "http://localhost:3000/api/users/new";
  private loginUrl:string = "http://localhost:3000/api/access/login";

  constructor(private httpClient: HttpClient, private loggedUser: ShareDataService) { }

  public registerUser(user: User):Observable<any>{
    return this.httpClient.post<User>(this.registerUrl, user);
  }

  public login(userData: Object):Observable<any>{
    return this.httpClient.post<User>(this.loginUrl, userData);
  }

  public loggedIn(): boolean{
    if(!localStorage.getItem('token') || this.loggedUser.getUser().username == "") return false;
    return true;
  }

  public logout(){
    localStorage.removeItem('token');
  }

  public getToken(){
    return localStorage.getItem('token');
  }

}
