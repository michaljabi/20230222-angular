import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'
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
export class AuctionsPageComponent implements OnInit, OnDestroy {
  // Zahardkodowane przykładowe dane AuctionItem:
  sampleAuctions: AuctionItem[] = []

  count: Observable<number> = interval(1000)
  areAuctionsLoading = false;
  errorMessage = '';

  auctionSub?: Subscription;
  constructor(private auctionsService: AuctionsService) {}

  ngOnDestroy(): void {
    console.log('AuctionsPageComponent DESTROY!');
    /*if( this.auctionSub) {
      this.auctionSub.unsubscribe();
    }*/
    this.auctionSub?.unsubscribe();
  }

  ngOnInit(): void {
    console.log('AuctionsPageComponent ngOnInit!');
    this.areAuctionsLoading = true;
    // tu jest pewien problem, którego nie ma | async
    this.auctionSub?.unsubscribe();
    this.auctionSub = this.auctionsService.getAllAuctions().subscribe({
      next: (auctions) => {
        this.sampleAuctions = auctions
        this.areAuctionsLoading = false;
        console.log('Aukcje przyszły!');
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message
        this.areAuctionsLoading = false;
      }
    });
  }

}
