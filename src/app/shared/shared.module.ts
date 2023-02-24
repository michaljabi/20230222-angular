import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage);
  }
}
