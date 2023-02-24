import { Observable, Subject, BehaviorSubject } from 'rxjs'

// Próba nr1:
const cart = new Observable((subscriber) => {

  subscriber.next([])
  subscriber.next([{}])
  subscriber.next([{}, {}])
  subscriber.next([{}, {c:1}, {}])
  subscriber.next([{}, {c:2}, {}])
})



cart.subscribe((e) => {
  console.log(e)
})


// Próba nr2:
const cartSubject = new Subject()

cartSubject.subscribe((e) => {
  console.log(e)
})

cartSubject.next([])
cartSubject.next([{}])
cartSubject.next([{}, {}])
cartSubject.next([{}, {c:1}, {}])
cartSubject.next([{}, {c:2}, {}])

// NG DESTORY....

// A potem nowy komponent:
cartSubject.subscribe((e) => {
  console.log(e)
})


// Dlatego najlepszym wyborem do zrobienia "Stateful" strumienia jest BehaviorSubject !!!!:
// Próba nr3:

const behaviourSubject = new BehaviorSubject([])

behaviourSubject.subscribe((e) => {
  console.log(e)
})

behaviourSubject.next([])
behaviourSubject.next([{}])
behaviourSubject.next([{}, {}])
behaviourSubject.next([{}, {c:1}, {}])
behaviourSubject.next([{}, {c:2}, {}])

behaviourSubject.subscribe((e) => {
  console.log(e)
})
