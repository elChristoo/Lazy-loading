import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponentComponent } from './about-component/about-component.component';

const routes: Routes = [
  {
    path: '', component: AboutComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
