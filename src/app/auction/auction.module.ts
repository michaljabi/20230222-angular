import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';


@NgModule({
  declarations: [
    AuctionsPageComponent,
    PromotionsPageComponent,
    AuctionCardComponent,
    AddAuctionPageComponent,
    ShoppingCartPageComponent
  ],
  exports: [
    AuctionCardComponent  // Udostępnij ten komponent dla każdego, kto mnie zaimportuje.
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ]
})
export class AuctionModule { }
