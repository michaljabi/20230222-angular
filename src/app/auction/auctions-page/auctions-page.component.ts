import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs'
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

@Component({
  // selector: 'app-auctions-page',
  template: `
    <div class="row">
      <div> Masz już {{ count | async }} aukcji</div>
      <div class="col-12" *ngIf="errorMessage">
        <div class="alert alert-danger"> {{ errorMessage }} 😭 ! </div>
      </div>
      <div class="col-12" *ngIf="areAuctionsLoading">
        <div class="alert alert-info"> Poczekaj... ładuję aukcje... </div>
      </div>
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

  count: Observable<number> = interval(1000)
  areAuctionsLoading = false;
  errorMessage = '';

  constructor(private auctionsService: AuctionsService) {}

  ngOnInit(): void {
    this.areAuctionsLoading = true;
    // tu jest pewien problem, którego nie ma | async
    this.auctionsService.getAllAuctions().subscribe({
      next: (auctions) => {
        this.sampleAuctions = auctions
        this.areAuctionsLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message
        this.areAuctionsLoading = false;
      }
    });
  }

}
