import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FeatureToggleDirective } from './feature.directive';
import { HeaderNav } from './header-nav.component';
import { FooterNav } from './footer-nav.component';
import { FeatureToggleModule } from 'ngx-feature-toggle';
import { HeaderNav2 } from './header-nav2.component';

import {HomeComponent} from './home/home.component';

import { AppRoutingModule } from ".//app-routing.module";


@NgModule({
  declarations: [
    AppComponent, FeatureToggleDirective, HeaderNav, HeaderNav2, FooterNav, HomeComponent
  ],
  imports: [
    BrowserModule, FeatureToggleModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
