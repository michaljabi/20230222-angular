import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs'
import { retry } from 'rxjs/operators'
import { AuctionItem } from './auction-item'

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  // STATELESS serwis (mamy tylko zapytania do back-end)
  constructor(private httpClient: HttpClient) { }

  getAllAuctions(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>('http://localhost:3000/auctions').pipe(retry(2),
      tap((p) => {
         console.log('AUKCJE SĄ TUTAJ', p.length, new Date().toISOString())
      })
    )
  }
}
