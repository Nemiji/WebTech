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
  bibItem5:any;
  //to be replaced
  

  sampleDataStandard = [
    ["Wolfgang Kümmel", "On Web Applications", "This paper deals with several aspects of modern web-design"],
    ["Achim Gansgenau", "How quantum computers may change the world", "This Paper opens up different views on quantum computers"],
    ["Günther Schroff", "Eine Gesellschaft im Wandel", "Dieses Werk handelt über die Gesellschaft und so"],
    ["Dieter Hängsagg", "Wie verschiede Tastaturlayouts das Benutzerverhalten ändern", "Über Tastaturen und Psychologie"]
  ] 

  sampleDataRelevant = [
    ["Autor Eins", "Titel und Titel mit Titel1", "Eine Beschreibung1"],
    ["Autor Zwei", "Titel und Titel mit Titel2", "Eine Beschreibung2"],
    ["Autor Drei", "Titel und Titel mit Titel3", "Eine Beschreibung3"],
    ["Autor Vier", "Titel und Titel mit Titel4", "Eine Beschreibung4"]
  ]

  sampleDataRandom = [
    ["random1", "random random random", "random random random random"],
    ["random2", "random random random", "random random random random"],
    ["random3", "random random random", "random random random random"],
    ["random4", "random random random", "random random random random"]
  ]


  sampleDataNewest = [
    ["default1", "default default default", "default and default or default"],
    ["default2", "default default default", "default and default or default"],
    ["default3", "default default default", "default and default or default"],
    ["default4", "default default default", "default and default or default"]
  ]  
  //sample img for slides
  images = [321, 144, 1021, 1077].map((n) => `https://picsum.photos/id/${n}/1920/400`);

  showNavigationArrows = true;
  showNavigationIndicators = true;
  title: any;
  currentMode:any;
  currentModeTransport:any;
  //navigation shit
  constructor(private router: Router, private api:ApiService){
    this.currentMode=this.sampleDataStandard;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  //goto /detailed and show detailed.component.html
  gotoDetailed(slide:any){
    let currentUrl = this.router.url;
    this.router.navigate([currentUrl]);
    this.currentModeTransport = [this.currentMode[slide].name,this.currentMode[slide].metadata["dc.contributor.author"][0].value,
    this.currentMode[slide].metadata["dc.description.abstract"][0].value, this.currentMode[slide].metadata["dc.date.issued"][0].value];
    //this.router.navigate(['detailed'],{state: {data:{caption:this.currentMode[slide]}}});
    this.router.navigate(['detailed'],{state: {data:{caption:this.currentModeTransport}}});
    
    
    
  }



//handle child event and "switch" dropdown output for wished data
  eventFromChild(data:string){
    if (data=='Newest'){
      this.api.getNewestItems().subscribe((data)=>{
        this.bibItems = data;
        this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
        this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
        this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
        this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
        //console.warn(this.bibItem1);
        this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      
        
      })
      //this.currentMode = this.sampleDataNewest;
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
      //this.currentMode = this.sampleDataRelevant;
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
      //this.currentMode = this.sampleDataRandom;
    }
    if (data=='Default'){
      this.api.getRandomItems().subscribe((data)=>{
        this.bibItems = data;
        this.bibItem1 = this.bibItems._embedded.searchResult._embedded.objects[0]._embedded.indexableObject;
        this.bibItem2 = this.bibItems._embedded.searchResult._embedded.objects[1]._embedded.indexableObject;
        this.bibItem3 = this.bibItems._embedded.searchResult._embedded.objects[2]._embedded.indexableObject;
        this.bibItem4 = this.bibItems._embedded.searchResult._embedded.objects[3]._embedded.indexableObject;
        this.bibItem5 = this.bibItems._embedded.searchResult._embedded.objects[4]._embedded.indexableObject;
        this.currentMode = [this.bibItem1, this.bibItem2, this.bibItem3, this.bibItem4];
      })
      //this.currentMode = this.sampleDataStandard;
    }
  }



//these functions are not used...but good as template for later
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
  // Move to specific slide
  navigateToSlide(item: any) {
    this.ngCarousel.select(item);
    console.log(item);
  }
  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }
  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }
  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }
  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
}



}
