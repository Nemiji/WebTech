import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getBibItems() {
    return this.http.get('http://webtech.informatik.unibw-muenchen.de:8080/server/items')
  }
  //Needs a function for avery item we want to call or we make a general
  //function so that the endpoint is given as parameter
}
