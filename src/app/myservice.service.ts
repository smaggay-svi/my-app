import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  // private finaldata = [];
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";
  // private apiUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  // private results = this.http.get(`${this.apiUrl}/?limit=949`);;  
  // results = this.http.get(this.apiUrl);

  getData() {
    // return this.results[3];
    return this.http.get(`${this.apiUrl}/?limit=807`);
    // return this.http.get(this.apiUrl);
  }

  getDetails(pokeName: String) {
    return this.http.get(`${this.apiUrl}/${pokeName}/`);
  }

}
