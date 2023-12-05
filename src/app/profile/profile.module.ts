import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    ProfileComponentComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [ ProfileComponentComponent ]
})
export class ProfileModule { }
