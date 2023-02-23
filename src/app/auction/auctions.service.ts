import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { AuctionItem } from './auction-item'

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor() { }

  getAllAuctions(): Observable<AuctionItem[]> {
    return of([
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
    ])
  }
}
