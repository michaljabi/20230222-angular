import { Observable, of } from 'rxjs'

// COLD PROVIDER:
const myStream: Observable<number> = of(9, 0, 80, 345);

// Zachowanie COLD - jest domyślne w rxjs i oznacza, że każdy subskrybent
// dostanie "te same wartości" (wszystko od początku)


// CONSUMER 1:
myStream.subscribe((n) => {
  console.log(n)
})

// CONSUMER 2:
myStream.subscribe((n) => {
  console.log(n)
})

setTimeout(() => {

  myStream.subscribe((n) => {
    console.log(n)
  })

}, 20)


// CONSUMER 3 - sprawdzenie po stronie sub. czy strumień jest skończony:
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
