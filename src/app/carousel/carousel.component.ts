import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap'
import { ApiService } from '../api.service';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  bibItems:any;
  bibItem1:any;
  bibItem2:any;
  bibItem3:any;
  bibItem4:any;
  
  
  
  //sample img for slides
  images = [321, 144, 1021, 1077].map((n) => `https://picsum.photos/id/${n}/1920/400`);

  showNavigationArrows = true;
  showNavigationIndicators = true;
  title: any;
  currentMode:any;
  currentModeTransport:any;
  //reload route when reused
  constructor(private router: Router, private api:ApiService){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  //goto /detailed and show detailed.component.html
  gotoDetailed(slide:any){
    let currentUrl = this.router.url;
    this.router.navigate([currentUrl]);
    try{
    this.currentModeTransport = [this.currentMode[slide].name,this.currentMode[slide].metadata["dc.contributor.author"][0].value,
    this.currentMode[slide].metadata["dc.date.issued"][0].value, this.currentMode[slide].metadata["dc.description.abstract"][0].value];
    }
    catch{
      this.currentModeTransport = [this.currentMode[slide].name,this.currentMode[slide].metadata["dc.contributor.author"][0].value, 
      this.currentMode[slide].metadata["dc.date.issued"][0].value];
    }
   //send api response from carousel component to detailed component
    this.router.navigate(['detailed'],{state: {data:{caption:this.currentModeTransport}}});
    
    
    
  }



/*handle child event and "switch" dropdown output for wished data
depending on param, api queries are sent
*/
  eventFromChild(data:string){

    if (data=='Newest'){
      this.api.getNewestItems().subscribe((data)=>{
        this.bibItems = data;
        this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
        this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
        this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
        this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
        
        this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      
        
      })
      
    }
    if (data=='Relevant'){
      this.api.getMostRelevantItems().subscribe((data)=>{
        this.bibItems = data;
        this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
        this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
        this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
        this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
        this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      })
      
    }
    if (data=='Random'){
      this.api.getRandomItems().subscribe((data)=>{
        this.bibItems = data;
        this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[Math.floor(Math.random() * (8))]._embedded.indexableObject;
        this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[Math.floor(Math.random() * (8))]._embedded.indexableObject;
        this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[Math.floor(Math.random() * (8))]._embedded.indexableObject;
        this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[Math.floor(Math.random() * (8))]._embedded.indexableObject;
        this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      })
      
    }
    if (data=='Default'){
      this.api.getRandomItems().subscribe((data)=>{
        this.bibItems = data;
        this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
        this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
        this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
        this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
        this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      })
      
    }
  }



//load default content on init
  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
  ngOnInit() {
    this.api.getRandomItems().subscribe((data)=>{
      this.bibItems = data;
      this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
      this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
      this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
      this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
      this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      console.warn(this.bibItem1);
    })
  }




}
