import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponentComponent } from './signup-component/signup-component.component';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    SignupComponentComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,

    MatSlideToggleModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule, 
    NgxTypedJsModule, 
    MatProgressBarModule
  ]
})
export class SignupModule { }
