import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

  slide:any;
  constructor() {
    this.slide=history.state.data;
   }
   
  ngOnInit(): void {
    
  }

}
