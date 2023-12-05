import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutComponentComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [ AboutComponentComponent ]
})
export class AboutModule { }
