# Zadania na start
## Dzień 2

### Zadanie #1 | Fikcyjny serwer back-end

1.1 Skorzystaj z biblioteki npm: [json-server](https://www.npmjs.com/package/json-server), zainstaluj ją w projekcie tak, aby inni też mogli z niej później korzystać (zamiast flagi `-g` przy instalacji zastosuj flagę `-D`, tak aby biblioteka została wpisana do `devDependencies`)

1.2 Jako fikcyjne źródło danych wystaw plik `.json` z następującą zawartością:

```json
{
  "auctions": [
    {
      "id": 1,
      "title": "Części do aparatu",
      "imgUrl": "https://picsum.photos/id/36/200/200",
      "description": "Jakiś opis",
      "price": 2000
    },
    {
      "id": 2,
      "title": "Mac Book",
      "imgUrl": "https://picsum.photos/id/48/200/200",
      "description": "Używany - ale sprawny",
      "price": 4000
    },
    {
      "id": 3,
      "title": "Smartfon",
      "imgUrl": "https://picsum.photos/id/160/200/200",
      "price": 800
    },
    {
      "id": 4,
      "title": "Samochoód",
      "imgUrl": "https://picsum.photos/id/183/200/200",
      "description": "Zabytkowy ogórek",
      "price": 1200
    },
    {
      "title": "Most",
      "price": 30000,
      "imgUrl": "https://picsum.photos/id/134/600/600",
      "description": "stalowy",
      "id": 5
    }
  ]
}
```

1.3 Napisz odpowiedni skrypt, aby można było swobodnie wystawiać serwer

1.4 Upewnij się, że back-end działa po uruchomieniu skryptu wejdź na stronę: http://localhost:3000/auctions

### Zadanie #2 | Model / kształt danych

Wiedząc, jak dane będą serwowane przez backend (zadanie 1). Napisz odpowiedni `interface` odwzorowujący kształt danych dla pojedynczej _Aukcji_ (możesz użyć do tego komendy [ng generate](https://angular.io/cli/generate)).  

### Zadanie #3 | Konfiguracja dev

Zmień zapisy w skrypcie `start` tak, aby po jego uruchomieniu, otwierała się domyślna przeglądarka a serwer dev osadzał się na porcie `4300`.  
Skorzystaj z dokumentacji: [ng serve](https://angular.io/cli/serve).
