import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    console.log('Hello Http Provider');
  }

  getRegion() {
    return this.http.get('https://ncddpdb.dswd.gov.ph/api/ceac/lib_region');
  }
}
