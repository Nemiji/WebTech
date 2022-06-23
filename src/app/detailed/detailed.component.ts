import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  
  slideNumber:any;
  book:any;
  constructor() {
    this.book=history.state.data.caption;

  
   }
   
  ngOnInit(): void {
    
  }

}
