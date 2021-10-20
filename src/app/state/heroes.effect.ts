import { map, mergeMap } from 'rxjs/operators';
import { loadHeroes, loadHeroesSuccess } from './heroes.action';
import { HeroesService } from './../heroes.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private heroesService: HeroesService) {}

}