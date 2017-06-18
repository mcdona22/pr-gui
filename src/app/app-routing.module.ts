import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {TeamViewComponent} from "./team-view/team-view.component";
import {TechViewComponent} from "./tech-view/tech-view.component";
import {PeopleViewComponent} from "./people-view/people-view.component";
import {SliderComponent} from "./slider/slider.component";

const ROUTES = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  , {path: 'home', component: SliderComponent}
  , {path: 'people', component: PeopleViewComponent}
  , {path: 'tech', component: TechViewComponent}
  , {path: 'teams', component: TeamViewComponent}

]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(ROUTES, { useHash: true}) ]
  , exports : [RouterModule]
  , declarations: []
})

export class AppRoutingModule { }
