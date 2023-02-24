import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceDetailsComponent } from './advice-page/advice-details.component'
import { AdvicesPageComponent } from './advice-page/advices-page.component'

const routes: Routes = [
  {
    path: 'advices',
    component: AdvicesPageComponent,
    children: [
      {path: '', component: AdviceDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
