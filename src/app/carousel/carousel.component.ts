import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  showNavigationArrows = true;
  showNavigationIndicators = true;
  title: any;

  constructor(private router: Router){}
  
  gotoDetailed(){
    this.router.navigate(['detailed']);
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
