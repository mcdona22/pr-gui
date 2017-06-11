import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { TechViewComponent } from './tech-view/tech-view.component';
import { TeamViewComponent } from './team-view/team-view.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    SliderComponent,
    SubtitleComponent,
    PeopleViewComponent,
    TechViewComponent,
    TeamViewComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
