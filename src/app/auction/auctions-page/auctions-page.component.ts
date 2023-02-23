import { Component } from '@angular/core';
import { AuctionItem } from '../auction-item'

@Component({
  // selector: 'app-auctions-page',
  template: `
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let item of sampleAuctions">
        <app-auction-card [auction]="item"></app-auction-card>
      </div>
    </div>
  `,
  styles: []
})
export class AuctionsPageComponent {
  // Zahardkodowane przykładowe dane AuctionItem:
  sampleAuctions: AuctionItem[] = [
    {
      id: 2231,
      imgUrl: 'https://picsum.photos/id/36/600/600',
      price: 2000,
      title: 'Części do aparatu'
    },
    {
      description: 'Używany - ale sprawny',
      id: 2,
      imgUrl: 'https://picsum.photos/id/48/200/200',
      price: 4000,
      title: 'Mac Book'
    },
  ]
}
