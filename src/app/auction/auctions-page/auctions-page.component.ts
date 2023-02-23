import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

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
export class AuctionsPageComponent implements OnInit {
  // Zahardkodowane przykładowe dane AuctionItem:
  sampleAuctions: AuctionItem[] = []

  constructor(private auctionsService: AuctionsService) {}

  ngOnInit(): void {
    this.auctionsService.getAllAuctions().subscribe((auctions) => {
        this.sampleAuctions = auctions
    });
  }

}
