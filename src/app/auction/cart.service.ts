import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { AuctionItem } from './auction-item'
import { CartItem } from './cart-item'

// Fasada
// STATEFUL SERVICE
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private item$ = new BehaviorSubject<CartItem[]>([])

  addAuction(auction: AuctionItem) {
    const items: CartItem[] = this.item$.getValue();
    const item = items.find(i => i.id === auction.id)
    if(item) {
      item.amount++
    } else {
      items.push({
        id: auction.id,
        amount: 1,
        auction
      })
    }
    // MUST !!!! Koniecznie rozgłaszamy wszystkim subskrybentom zmiany!!!
    this.item$.next(items);
  }
  getAll(): Observable<CartItem[]> {
    return this.item$.asObservable()
  }
  getCount(): Observable<number> {
    // ([])----------([A])-
    //   |             |
    //   map(....)     |
    //    \             \
    //     0             1
    return this.item$.pipe(map((items) => items.reduce((amount, item) => amount + item.amount, 0)))
  }
  getValue(): Observable<number> {
    return this.item$.pipe(map((items) => items.reduce((value, item) => value + item.amount * item.auction.price, 0)))
  }
}

/*

export class CartService {
  private items: CartItem[] = []

  addAuction(auction: AuctionItem) {
    const item = this.items.find(i => i.id === auction.id)
    if(item) {
      item.amount++
    } else {
      this.items.push({
        id: auction.id,
        amount: 1,
        auction
      })
    }
  }
  getAll(): readonly CartItem[] {
    return this.items
  }
  getCount(): number {
    return this.items.reduce((amount, item) => amount + item.amount, 0)
  }
  getValue(): number {
    return this.items.reduce((value, item) => value + item.amount * item.auction.price, 0)
  }
}

*/
