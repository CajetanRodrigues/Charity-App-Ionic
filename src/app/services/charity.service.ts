import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CharityService {
  private rest = 'http://localhost:1234/rest/';  // URL to web api
  items : any;
  constructor(private http: HttpClient) { }
  getCharityRequests() : Observable<any[]>  {
    return this.http.get<any>('/get-charity-requests');
  }
}
