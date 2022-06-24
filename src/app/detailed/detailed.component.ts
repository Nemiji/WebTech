import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  
  book:any;
  constructor() {
    //retrieve data from route ''
    this.book=history.state.data.caption;

  
   }
   
  ngOnInit(): void {
    
  }

}
