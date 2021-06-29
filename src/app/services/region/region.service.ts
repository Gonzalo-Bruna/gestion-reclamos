import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Region } from '../../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  baseUrl: string = "http://localhost:3000/api/regions/";

  constructor(private httpClient: HttpClient) { }

  public getAllRegions():Observable<Region[]>{
    return this.httpClient.get<Region[]>(`${this.baseUrl}regions-list`);
  }

  public getRegionByName(name: string):Observable<Region>{
    return this.httpClient.get<Region>(`${this.baseUrl}${name}`);
  }

}