import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';


@NgModule({
  declarations: [
    AuctionsPageComponent,
    PromotionsPageComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ]
})
export class AuctionModule { }
