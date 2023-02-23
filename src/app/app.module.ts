import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AuctionModule } from './auction/auction.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuctionModule,
    HttpClientModule,
    RouterModule.forChild([
      // Tutaj powinnyśmy przygotować komponent do wyświetlenia 404:
      { path: '**', component: HeaderComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
