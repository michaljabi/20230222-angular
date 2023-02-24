import { AuctionItem } from './auction-item'

export interface CartItem {
  id: number;
  amount: number;
  auction: AuctionItem;
}
