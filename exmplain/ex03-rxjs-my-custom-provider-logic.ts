import { Observable } from 'rxjs'

// MY OWN PROVIDER:
// Observable są LAZY.
const myStream: Observable<number> = new Observable((subscriber) => {
  subscriber.next(200)

  // subscriber.error(new Error('Oh no...'))

  setTimeout(() => {
    subscriber.next(300)
    subscriber.complete();
  }, 1000)
});




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
