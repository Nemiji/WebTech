import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class NgbdDropdownBasic implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  loadNewest() {
    this.api.getNewestItems()
    //load information in carrousel for each
  }
  
  loadMostRelevant() {
    this.api.getMostRelevantItems()
  }

  loadRandom() {
    this.api.getRandomItems()
  }
}
