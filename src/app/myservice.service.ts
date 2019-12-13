import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";
  private typeUrl = "https://pokeapi.co/api/v2/type/";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.apiUrl}/?limit=807`);
  }

  getDetails(url: String) {
    return this.http.get(`${url}`);
  }

  getTypeList() {
    return this.http.get(`${this.typeUrl}`);
  }

  getDisplayFilter(url: String) {
    return this.http.get(`${url}`);
  }

}
