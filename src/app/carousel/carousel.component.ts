import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //to be replaced

  sampleDataNewest = [
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


  sampleDataStandard = [
    ["default1", "default default default", "default and default or default"],
    ["default2", "default default default", "default and default or default"],
    ["default3", "default default default", "default and default or default"],
    ["default4", "default default default", "default and default or default"]
  ]  
  //sample img for slides
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  showNavigationArrows = true;
  showNavigationIndicators = true;
  title: any;

  //navigation shit
  constructor(private router: Router){}

  //goto /detailed and show detailed.component.html
  gotoDetailed(){
    this.router.navigate(['detailed']);
  }

  // save button output of dropdown
  currentMode:any = this.sampleDataStandard;

//handle child event and "switch" dropdown output for wished data
  eventFromChild(data:string){
    if (data=='Newest'){
      this.currentMode = this.sampleDataNewest;
    }
    if (data=='Relevant'){
      this.currentMode = this.sampleDataRelevant;
    }
    if (data=='Random'){
      this.currentMode = this.sampleDataRandom;
    }
    if (data=='Default'){
      this.currentMode = this.sampleDataStandard;
    }
  }


//these functions are not used...but good as template for later
  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
  ngOnInit() {}
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
