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
    RouterModule.forRoot([
    { path: 'detailed', component: DetailedComponent},
    { path: '', component: CarouselComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NgbdDropdownBasic, CarouselComponent]
})
export class AppModule { }
