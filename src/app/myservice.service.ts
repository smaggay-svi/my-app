import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.apiUrl}/?limit=807`);
  }

  // getDetails(pokeName: String) {
  //   return this.http.get(`${this.apiUrl}/${pokeName}/`);
  // }

}
