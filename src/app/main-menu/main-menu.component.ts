import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button" (click)="handleToggleButtonClick()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" [class.show]="isMenuOpen">
        <ul class="navbar-nav">
          <li class="nav-item active"><a class="nav-link" href="auctions">Aukcje</a></li>
          <li class="nav-item"><a class="nav-link" href="promotions">Promocje</a></li>
          <li class="nav-item"><a class="nav-link" href="advices">Podpowiadamy</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class MainMenuComponent {

  isMenuOpen = false;

  handleToggleButtonClick() {
      this.isMenuOpen = !this.isMenuOpen;
  }
}
