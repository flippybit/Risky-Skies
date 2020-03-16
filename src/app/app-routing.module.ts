import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModoCrearComponent } from './modo-crear/modo-crear.component';
import { LandingViewComponent } from './landing-view/landing-view.component';

const routes: Routes = [
  {path: '', component: LandingViewComponent},
  {path: 'modo', component: ModoCrearComponent},
  {path: 'landing', component: LandingViewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
