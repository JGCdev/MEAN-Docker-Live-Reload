import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  endpoint = 'http://localhost:8000/api/seo/';

  constructor(private http: HttpClient) { }

  analizeUrl(url: string): Observable<any> {
    return this.http.post(this.endpoint, {requiredUrl: url});
  }
}
