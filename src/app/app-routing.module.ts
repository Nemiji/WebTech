import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DetailedComponent } from './detailed/detailed.component';

const routes: Routes = [
  { path: 'detailed', component: DetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DetailedComponent]