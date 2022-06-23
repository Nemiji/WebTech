import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { range } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  getNewestItems() {
    return this.http.get('https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects?configuration=default&sort=dc.date.issued,desc&size=5');
  }

  getMostRelevantItems() {
    return this.http.get('https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects')

  }

  getRandomItems() {
    return this.http.get('https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects')

  }

}
