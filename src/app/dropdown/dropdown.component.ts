import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})


export class NgbdDropdownBasic implements OnInit {

  //event stuff
  @Output() sendDataToParent = new EventEmitter<string>();
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  
  //emits defined data to a parent event handler
  _sendDataToParent(data:string){
    this.sendDataToParent.emit(data);
  }

}
