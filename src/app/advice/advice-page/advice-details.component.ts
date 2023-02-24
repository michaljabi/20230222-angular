import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  template: `
    <p>
      Kliknięto na id: {{id}}
    </p>
  `,
  styles: [
  ]
})
export class AdviceDetailsComponent {
    id = 20;
    constructor(private activatedRoute: ActivatedRoute) {
      // this.id = activatedRoute.snapshot.params['adviceId']
      activatedRoute.params.subscribe((params: Params) => {
        this.id = Number(params['adviceId'] || 0)
        console.log(this.id)
        // console.log('!!!!')
      })
    }
}
