import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exit } from './exit';

@Injectable({
  providedIn: 'root'
})
export class ExitService {
  private baseURL = "http://localhost:8080/api/employee/exitDetails";

  constructor(private httpClient: HttpClient) { }

  getexitlist(): Observable<Exit[]>{
    // alert(this.baseURL);
    return this.httpClient.get<Exit[]>(`${this.baseURL}`);
  }

  createleave(exit: Exit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, exit);
  }
  getleaveById(exit_id: number): Observable<Exit>{
    return this.httpClient.get<Exit>(`${this.baseURL}/${exit_id}`);
  }
  updateleave(exit_id: number, exit: Exit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${exit_id}`, exit);
  }

  deleteleave(exit_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${exit_id}`);
  }
}