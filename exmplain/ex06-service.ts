import { BehaviorSubject, map, Observable } from 'rxjs'

export class VegetableService {
  private vegetablesSubject = new BehaviorSubject(['lettuce', 'tomato', 'cucumber']);
  add(veggie: string): void {
    const vegetables: string[] = this.vegetablesSubject.getValue();
    vegetables.push(veggie);
    this.vegetablesSubject.next(vegetables);
  }

  getAll(): Observable<string[]> {
    return this.vegetablesSubject.asObservable();
  }

  count(): Observable<number> {
    return this.vegetablesSubject.pipe(map(veggies => veggies.length));
  }
}

const myService = new VegetableService()


myService.add('OK')

let myValues = []
let myCount = 0;

myService.getAll().subscribe((values) => {
  myValues = values;
  console.log(myCount);
})

myService.count().subscribe((n) => {
  myCount = n;
  console.log(n);
})





