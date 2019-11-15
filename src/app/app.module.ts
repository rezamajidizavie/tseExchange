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
import { HeaderComponent } from './header/header.component';

export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}


@NgModule({
   declarations: [
      AppComponent,
      LandingComponent,
      RegisterComponent,
      LoginComponent,
      DepositComponent,
      HeaderComponent
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
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
         }
      }),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
