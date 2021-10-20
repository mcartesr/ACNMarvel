import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { FormsModule } from '@angular/forms';

import { ListadoDeHeroesRoutingModule } from './listado-de-heroes-routing.module';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';


@NgModule({
  declarations: [
    ListadoDeHeroesComponent,
    SpinnerComponent],
  imports: [
    CommonModule,
    ListadoDeHeroesRoutingModule,
    FormsModule
  ]
})
export class ListadoDeHeroesModule { }