import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://127.0.0.1:5000/v1';

  constructor(private http: HttpClient) {}

  ping(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ping`);
  }
}
