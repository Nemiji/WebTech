import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownBasic } from './dropdown/dropdown.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailedComponent } from './detailed/detailed.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdDropdownBasic,
    routingComponents,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    //define roots and associated components
    RouterModule.forRoot([
    { path: '', children:[{
      path: 'detailed', component: DetailedComponent
    }]},
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
