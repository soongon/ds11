import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from "./service/HeroService";
import { HeroesComponent } from './heroes/heroes.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
