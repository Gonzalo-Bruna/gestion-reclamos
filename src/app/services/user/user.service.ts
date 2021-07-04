import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/api/users";

  constructor(private httpClient: HttpClient) { }

  public getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/users-list`);
  }

  public getUserById(id: string):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/id/${id}`);
  }

  public getUserByUsername(username: String):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/username/${username}`);
  }

}
