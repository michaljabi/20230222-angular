import { Subject } from 'rxjs'

const myStream = new Subject<number>();

myStream.next(800)
// myStream.error(new Error('Oh no!!'));
myStream.complete();

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

myStream.next(999)
myStream.next(999)
myStream.next(999)
myStream.next(999)
myStream.next(999)


