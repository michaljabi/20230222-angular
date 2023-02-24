import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { InsertAuctionItem } from '../auction-item'

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

  imgId = 200

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
      console.log(auction)
  }
}
