import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeServices {

  private apiUrl = 'https://gorest.co.in/public/v2/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    this.apiUrl = this.apiUrl + "users?page=1&per_page=50"
    return this.http.get<any[]>(this.apiUrl);
  }
}
