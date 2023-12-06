import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponentComponent } from './about-component/about-component.component';


@NgModule({
  declarations: [
    AboutComponentComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponentComponent
  ]
})
export class AboutModule { }
