import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownBasic } from './dropdown/dropdown.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailedComponent } from './detailed/detailed.component';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    //these are the possible endpoints
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
