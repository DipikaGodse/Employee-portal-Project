import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseURL = "http://localhost:8080/api/leaveDetails";

  constructor(private httpClient: HttpClient) { }

  getleavelist(): Observable<Leave[]>{
    // alert(this.baseURL);
    return this.httpClient.get<Leave[]>(`${this.baseURL}`);
  }

  createleave(leave: Leave): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, leave);
  }
  getleaveById(leave_id: number): Observable<Leave>{
    return this.httpClient.get<Leave>(`${this.baseURL}/${leave_id}`);
  }
  updateleave(leave_id: number, leave: Leave): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${leave_id}`, leave);
  }

  deleteleave(leave_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${leave_id}`);
  }
}