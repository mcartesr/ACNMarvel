import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HEROES_STATE_NAME } from '../../state/heroes.selector';
import { EffectsModule } from '@ngrx/effects';
import { ListadoDeHeroesRoutingModule } from './listado-de-heroes-routing.module';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { heroesReducer } from '../../state/heroes.reducer'
import { HeroesEffects } from '../../state/heroes.effect'
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    ListadoDeHeroesComponent,
    SpinnerComponent],
  imports: [
    CommonModule,
    ListadoDeHeroesRoutingModule,
    FormsModule,
    EffectsModule.forFeature([HeroesEffects]),
    StoreModule.forFeature(HEROES_STATE_NAME, heroesReducer),
  ],
  providers: [Store]
})
export class ListadoDeHeroesModule { }