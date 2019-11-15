import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing/landing-routing-module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RegisterComponent } from './Register/Register.component';
import { RegisterRoutingModule } from './Register/Register-routing-module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginRoutingModule } from './login/login-routing-module';
import { LoginComponent } from './login/login.component';
import { DepositComponent } from './deposit/deposit.component';
import { DepositRoutingModule } from './deposit/deposit-routing-module';

export function HttpLoaderFactory(httpClient: HttpClient) {
   return new TranslateHttpLoader(httpClient);
}


@NgModule({
   declarations: [
      AppComponent,
      LandingComponent,
      RegisterComponent,
      LoginComponent,
      DepositComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      LandingRoutingModule,
      RegisterRoutingModule,
      AutocompleteLibModule,
      LoginRoutingModule,
      DepositRoutingModule,
      TranslateModule.forRoot(),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
