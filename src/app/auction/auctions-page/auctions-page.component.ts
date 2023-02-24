import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs'
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'
import { CartService } from '../cart.service'

@Component({
  // selector: 'app-auctions-page',
  template: `
    <div class="row">
      <div class="p-3"> Masz już {{ count | async }} aukcji w koszyku, wartość koszyka to: {{ value | async }}</div>
      <div class="col-12" *ngIf="errorMessage">
        <div class="alert alert-danger"> {{ errorMessage }} 😭 ! </div>
      </div>
      <div class="col-12" *ngIf="areAuctionsLoading">
        <div class="alert alert-info"> Poczekaj... ładuję aukcje... </div>
      </div>
      <pre>
        {{cartService.getAll() | async | json}}
      </pre>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let item of sampleAuctions">
        <app-auction-card [auction]="item" (addToCart)="handleAddToCart($event)"></app-auction-card>
      </div>
    </div>
  `,
  styles: []
})
export class AuctionsPageComponent implements OnInit, OnDestroy {
  // Zahardkodowane przykładowe dane AuctionItem:
  sampleAuctions: AuctionItem[] = []

  count: Observable<number> = this.cartService.getCount()
  value: Observable<number> = this.cartService.getValue()
  areAuctionsLoading = false;
  errorMessage = '';

  auctionSub?: Subscription;
  constructor(private auctionsService: AuctionsService, public cartService: CartService) {}


  handleAddToCart(auctionItem: AuctionItem) {
      this.cartService.addAuction(auctionItem)
  }

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
