import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    HomeComponentComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    // BrowserAnimationsModule
    MatSlideToggleModule,
    FormsModule,
    MatProgressBarModule

  ],
  exports:[ HomeComponentComponent, ]
})
export class HomeModule { }
