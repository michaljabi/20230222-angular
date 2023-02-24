import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { InsertAuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

@Component({
  templateUrl: './add-auction-page.component.html',
  styles: [
    `
        input.ng-invalid.ng-touched,
        textarea.ng-invalid.ng-touched {
          border: 2px crimson solid;
        }
    `
  ]
})
export class AddAuctionPageComponent {

  imgId = 20

  constructor(private auctionsService: AuctionsService) {
  }

  get imgUrl(): string {
    return `https://picsum.photos/id/${this.imgId}/600/600`
  }

  handleFormSubmit(form: NgForm) {
      if(form.invalid) {
        form.control.markAllAsTouched()
        return;
      }
      const { title, price, description } = form.value;
      const auction: InsertAuctionItem = {
        price,
        title,
        description,
        imgUrl: this.imgUrl
      }
      this.auctionsService.addAuction(auction).subscribe({
        next: () => {
          form.reset({imgUrl: 20})
        },
        error: (err: HttpErrorResponse) => {}
      })
  }
}
