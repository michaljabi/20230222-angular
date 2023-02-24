import { Component } from '@angular/core';

// Nie używam już, bo mam niżej "inline type"
/*
interface MenuItem {
  link: string;
  name: string;
}
*/

@Component({
  selector: 'app-main-menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button" (click)="handleToggleButtonClick()">
        <span class="navbar-toggler-icon"></span>
      </button>
<!--      <div class="collapse navbar-collapse" [class.show]="isMenuOpen">-->
      <div class="collapse navbar-collapse" [ngClass]="{ 'show': isMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item" *ngFor="let item of menuItems">
            <a class="nav-link" [routerLink]="item.link" routerLinkActive="active">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <!--<div *ngIf="isMenuOpen; else whatever">🤪</div>
      <ng-template #whatever>
          🚀
      </ng-template>-->
      <div class="text-light">
        <a class="btn btn-primary mx-2" routerLink="/add-auction">
          <!--<fa-icon icon="plus"></fa-icon>--> Dodaj
        </a>
        <a class="btn btn-secondary ml-2" routerLink="/shopping-cart">
          <!--<fa-icon icon="shopping-basket"></fa-icon>--> Koszyk
        </a>
      </div>
    </nav>
  `,
  styles: []
})
export class MainMenuComponent {

  // Użyty inline type w TS:
  menuItems: { link: string; name: string; }[] = [
    {link: '/auctions', name: 'Aukcje'},
    {link: '/promotions', name: 'Promocje'},
    {link: '/advices', name: 'Podpowiadamy'},
  ]
  isMenuOpen = false;

  handleToggleButtonClick() {
      this.isMenuOpen = !this.isMenuOpen;
  }
}
