import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroProfileRoutingModule } from './hero-profile-routing.module';
import { HeroProfileComponent } from './hero-profile.component';
import { CapitalizePipe } from '../../capitalize.pipe';

import { ModalPollComponent } from './modal-poll.component';

@NgModule({
  declarations: [
    HeroProfileComponent,
    ModalPollComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    HeroProfileRoutingModule
  ]
})
export class HeroProfileModule { }