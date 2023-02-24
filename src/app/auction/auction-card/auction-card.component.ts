import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuctionItem } from '../auction-item'

@Component({
  selector: 'app-auction-card',
  template: `
      <div class="card" *ngIf="auction">
          <div class="card-header">{{auction.title}}</div>
          <img class="card-img" [src]="auction.imgUrl" [alt]="'Zdjęcie' + auction.title"/>
          <div class="card-body">
            <p class="card-text">
                {{auction.description}}
            </p>
              <div class="d-flex justify-content-between align-content-center">
                <strong> {{auction.price}} zł</strong>
                <button class="btn btn-primary" (click)="addToCart.emit(auction)">
                  <fa-icon icon="cart-plus"></fa-icon>
                </button>
              </div>
          </div>
      </div>
  `,
  styles: [
  ]
})
export class AuctionCardComponent {
  @Input() auction?: AuctionItem
  @Output() addToCart = new EventEmitter<AuctionItem>();

  // TEN KOMPONENT POZOSTAJE DUMMY!
}
