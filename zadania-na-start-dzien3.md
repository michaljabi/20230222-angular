# Zadania na start
## Dzień 3

### Zadanie #1 | Nowy moduł advice z routing table

> Pamiętaj, że strona _Podpowiadamy_ z założenia miała pokazywać artykuły blogowe. Więc jest to wyraźnie oddzielny temat w naszej aplikacji. Dlatego chcemy przygotować dla niego specjalne miejsce.

1.1 Spraw, aby strona `/advices` (Podpowiadamy) działała poprawnie, będąc częścią osobnego nowego modułu `advice`

1.2 Dodaj do `advices-page` template:

```html
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
```

1.3 Ten `router-outlet` będzie obsługiwał tzw. _child routing_. Zaimplementujemy go razem, ale już teraz możesz przygotować komponent `advice-details`, który potem będziemy osadzać w tym _outlecie_


### Zadanie #2 | W pełni działające menu + strony

2.1 Buttony w menu:

Dodaj na koniec widoku `main-menu` kod HTML pomiędzy jego znacznikami:
```html
....
    </div>
    <!-- tutaj wklej kod z buttonami poniżej -->
</nav>
```
--- 
PS. jeśli dodałeś kod z `*ngIf - else`, to musisz go zakomentować:
```html
....
    </div>
    <!-- 
    <div *ngIf="isMenuOpen; else whatever">🤪</div>
    <ng-template #whatever>
        🚀
    </ng-template> 
    -->
    <!-- tutaj wklej kod z buttonami poniżej -->
</nav>
```


Kod z buttonami do dodania:
```html
<div class="text-light">
  <a class="btn btn-primary">
    <!--<fa-icon icon="plus"></fa-icon>--> Dodaj
  </a>
  <a class="btn btn-secondary ml-2">
    <!--<fa-icon icon="shopping-basket"></fa-icon>--> Koszyk
 </a>
</div>
```

2.2 Dodaj brakujące strony jako komponenty `*-page`, nazwij je np.: `add-auction-page`, `shopping-cart-page`
template jako oddzielny plik zrób tylko w komponencie - `add-auction-page`
(pozostałe mogą mieć inline-style oraz template)

2.3 Podłącz strony z routingiem i menu (przyciski: Dodaj i Koszyk).

2.4 Do `add-auction-page` dodaj kod HTML, przygotowany pod formularz dodawania aukcji:

```html
<h2 class="my-3">Dodaj nową aukcję</h2>
<section class="row">
  <div class="col-6">
    <img
      class="img-thumbnail"
      alt="Podgląd fotografii"
      src="https://picsum.photos/id/1/600/600"
    />
  </div>
  <div class="col-6">
    <form>
      <div class="form-group">
        <label for="auctionTitle">Nazwa aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
<!--              <fa-icon icon="edit"></fa-icon>-->
            </span>
          </div>
          <input
            id="auctionTitle"
            type="text"
            name="title"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="auctionPrice">Cena aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
<!--              <fa-icon icon="tag"></fa-icon>-->
            </span>
          </div>
          <input
            id="auctionPrice"
            type="number"
            name="price"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="img">Zdjecie</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
<!--              <fa-icon icon="image"></fa-icon>-->
            </span>
          </div>
          <input
            id="img"
            type="number"
            name="imgUrl"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="auctionDescription">Szczegółowy opis</label>
        <div class="input-group mb-3">
          <textarea
            id="auctionDescription"
            rows="5"
            class="form-control"
            name="description"
          ></textarea>
        </div>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" type="submit">
            <!--<fa-icon icon="gavel"></fa-icon>--> Dodaj aukcję
        </button>
      </div>
    </form>
  </div>
</section>
```
[link do kodu HTML](https://codesandbox.io/s/auction-portal-htmls-ulkx1?file=/add-auction-page.html:0-2170)

#### Pomocne linki do zadania 2:
- [defining-a-basic-route](https://angular.io/guide/router#defining-a-basic-route)
- [route-order](https://angular.io/guide/router#route-order)
- [RouterLink](https://angular.io/api/router/RouterLink#description)


### Zadanie #3 | Korzystanie ze strumienia jako `subscriber`

3.1 Wiedząc, że kod:
```typescript
myStream.subscribe({
  next: (n) => {
    console.log(n)
  },
  error: (err: any) => {
    console.log(err);
  },
  complete: () => {
    console.log('Completed !')
  },
})
```

Pozwala obsługiwać 3 stany strumienia, dodaj obsługę "Ładowania" i "Błędu" przy zapytaniu o aukcje z _back-end'u_ dla strony [auctions-page](src/app/auction/auctions-page/auctions-page.component.ts)

3.2 Wykorzystaj kod do template:
```html
<div class="row">
  <div class="col-12">
    <div class="alert alert-danger"> Nie udało się załadować aukcji 😭 ! </div>
  </div>
  <div class="col-12">
    <div class="alert alert-info"> Poczekaj... ładuję aukcje... </div>
  </div>
  ....
</div>
```

3.3 Chodzi o obsługę UIX - tak aby użytkownik widział, że aukcje się ładują albo, że coś poszło nie tak.
