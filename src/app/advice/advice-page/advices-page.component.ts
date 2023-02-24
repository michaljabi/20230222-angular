import { Component } from '@angular/core';

@Component({
  template: `
    <h2 class="my-3">Podpowiadamy co wybrać !</h2>
    <section class="row">
      <div class="col-12 col-sm-4">
        <ul class="list-group">
          <li class="list-group-item">
            <a routerLink="/advices/1"> Jak wybrać dobry komputer? </a>
          </li>
          <li class="list-group-item">
            <a routerLink="/advices/2"> Inny tytuł </a>
          </li>
          <li class="list-group-item">
            <a routerLink="/advices/3"> Co robić kiedy... </a>
          </li>
          <li class="list-group-item">
            <a routerLink="/advices/4"> Artykuł 4 </a>
          </li>
          <li class="list-group-item">
            <button class="btn btn-primary" routerLink="/advices/67">
              Artykuł 67
            </button>
          </li>
        </ul>
      </div>
      <div class="col-12 col-sm-8">
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class AdvicesPageComponent {}
