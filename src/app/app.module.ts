import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing/landing-routing-module';

@NgModule({
   declarations: [
      AppComponent,
      LandingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      LandingRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
