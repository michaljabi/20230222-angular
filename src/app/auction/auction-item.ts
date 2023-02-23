export interface AuctionItem {
  id: number
  title: string
  imgUrl: string
  price: number
  description?: string
}

// Wyjaśnienie tzw. Utility Types:
// https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content

export type InsertAuctionItem = Omit<AuctionItem, 'id'>;

const newAuctionToPost: InsertAuctionItem = {
  imgUrl: '',
  price: 0,
  title: ''
}

// Jedyna zasadność, żeby na front endzie robić klasy:
// === Jak potrzebujesz sprawdzić insanceof

// if( newAuctionToPost instanceof InsertAuctionItem) {
//
// }

class BackendError extends Error {}

const someError: any = {};


if(someError instanceof BackendError) {

} else if (someError instanceof Error) {

}
