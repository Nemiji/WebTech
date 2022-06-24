import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { range } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  //Gets the 5 last published objects
  getNewestItems() {
    return this.http.get('https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects?configuration=default&sort=dc.date.issued,desc&size=5');
  }

  //Gets the 4 last accessed objects
  getMostRelevantItems() {
    return this.http.get('https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects?configuration=default&sort=dc.date.accessioned,desc&size=4');
  }

  //Gets the full list of objects
  getRandomItems() {
    return this.http.get('https://webtech.informatik.unibw-muenchen.de/server/api/discover/search/objects');
  }

}
