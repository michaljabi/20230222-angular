import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs'
import { retry } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { AuctionItem, InsertAuctionItem } from './auction-item'

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  private readonly ENDPOINT_URL = `${environment.BASE_URL}/auctions`

  // STATELESS serwis (mamy tylko zapytania do back-end)
  constructor(private httpClient: HttpClient) { }

  getAllAuctions(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.ENDPOINT_URL).pipe(retry(2),
      tap((p) => {
         console.log('AUKCJE SĄ TUTAJ', p.length, new Date().toISOString())
      })
    )
  }

  // Omit<AuctionItem, 'id'>;
  addAuction(auction: InsertAuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.ENDPOINT_URL, auction)
  }
}
