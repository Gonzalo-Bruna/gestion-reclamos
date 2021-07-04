import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Complaint } from '../../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  baseUrl: string = "http://localhost:3000/api/complaints";

  constructor(private httpClient: HttpClient) { }

  public getAllComplaints():Observable<Complaint[]>{
    return this.httpClient.get<Complaint[]>(`${this.baseUrl}/complaints-list`);
  }

  // public getComplaintById(id: string):Observable<Complaint>{
  //   return this.httpClient.get<Complaint>(`${this.baseUrl}${id}`);
  // }

  public createComplaint(complaint: Complaint):Observable<Complaint>{
    return this.httpClient.post<Complaint>(`${this.baseUrl}/new`, complaint);
  }

  public getComplaintsByUser(userId: string):Observable<Complaint[]>{
    return this.httpClient.get<Complaint[]>(`${this.baseUrl}/user/${userId}`);
  }

}
