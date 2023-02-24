import { VegetableService } from './ex06-service'

const veggieService = new VegetableService()

let myValues = []
let myCount = 0;

veggieService.getAll().subscribe((values) => {
  myValues = values;
  console.log(myCount);
})

veggieService.count().subscribe((n) => {
  myCount = n;
  console.log(n);
})

// Same thing in Promises:

let someValues = []
let otherCount = 0;

Promise.resolve([]).then((values) => {
  someValues = values;
  console.log(otherCount);
})

Promise.resolve(1).then((counter) => {
  otherCount = counter;
  console.log(otherCount);
})


// Same thing in Callbacks:

let restOfOtherValues = []
let restOfCount = 0;

setTimeout(() => {
  restOfOtherValues = ['data'];
  console.log(restOfCount)
})

setTimeout(() => {
  restOfCount = 1
  console.log(restOfCount)
})

// https://dilshankelsen.com/understanding-stale-closures-in-javascript/


// RXJS Solution:
// operator For The Win.
// https://rxmarbles.com/#zip

import { zip } from 'rxjs'

const syncDataStream = zip(veggieService.getAll(), veggieService.count());

syncDataStream.subscribe(([veggies, count]) => {
  console.log(veggies)
  console.log(count)
})

// veggieService.add('onion')
