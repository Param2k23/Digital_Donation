import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://donation-api-5bc4.onrender.com/public/login';
  constructor(private httpClient : HttpClient ) { }
  loginUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.httpClient.post(this.apiUrl, body);
}
}
