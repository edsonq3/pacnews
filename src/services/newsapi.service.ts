import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(
    private http: HttpClient
  ) { }

  API_KEY = '5ccd071412e24254a53ea5da7760e689';

  getArtigo() {
    return this.http.get('https://newsapi.org/v2/everything?q=apple&from=2023-07-31&to=2023-07-31&sortBy=popularity&apiKey=' + this.API_KEY)
  }
}
