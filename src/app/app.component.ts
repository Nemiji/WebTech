import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap'
import { routingComponents } from './app-routing.module';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  bibItems:any;
  bibItem1:any;
  bibItem2:any;
  bibItem3:any;
  bibItem4:any;
  bibItem5:any;
  
  constructor(private api:ApiService) {}

  ngOnInit() {
    
    this.api.getRandomItems().subscribe((data)=>{
      this.bibItems = data;
      this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
      this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
      this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
      this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
      this.bibItem5 = this.bibItems._embedded.searchResult._embedded.objects[4]._embedded.indexableObject;
      console.log(this.bibItem1);
    })

    
  }
 
}
