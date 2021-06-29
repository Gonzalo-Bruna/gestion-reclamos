import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:3000/api/users/new";

  constructor(private httpClient: HttpClient) { }

  public registerUser(user: User):Observable<User>{

    return this.httpClient.post<User>(this.baseUrl, user);

  }

}
