import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailedComponent } from './detailed/detailed.component';

@NgModule({
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DetailedComponent, AppComponent]