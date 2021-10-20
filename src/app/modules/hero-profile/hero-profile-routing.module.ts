import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroProfileComponent } from './hero-profile.component';
import { ModalPollComponent } from './modal-poll.component';

/*const routes: Routes = [
  { path: 'heroe/:id', component: HeroProfileComponent}
];*/

const routes: Routes = [
  { path: '', component: HeroProfileComponent},
  { path: '', component: ModalPollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroProfileRoutingModule { }