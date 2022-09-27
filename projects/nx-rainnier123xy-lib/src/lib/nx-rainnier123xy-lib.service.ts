import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NxRainnier123xyLibService {

  private apiRoot = "https://api.tvmaze.com";
  constructor(private http:HttpClient) { }

  getShow(id:number) {
    return this.http.get(`${this.apiRoot}/shows/${id}`)
  }
}
