import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';


@NgModule({
  declarations: [
    AuctionsPageComponent,
    PromotionsPageComponent,
    AuctionCardComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ]
})
export class AuctionModule { }
