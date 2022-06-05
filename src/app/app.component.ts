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
  bibItem:any;

  constructor(private api:ApiService) {}

  ngOnInit() {}
 
}
