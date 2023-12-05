import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './home-component.component';

@NgModule({
  declarations: [
    HomeComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
 
  ],
  exports:[ HomeComponentComponent, ]
})
export class HomeModule { }
