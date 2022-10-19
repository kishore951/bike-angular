import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewBike=()=>{
    return this.http.get("http://localhost:8080/viewBike")
  }
  addBike=(data:any)=>{
    return this.http.post("http://localhost:8080/addBike",data)
  }
}
