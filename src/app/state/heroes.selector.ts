import { HeroesState } from './heroes.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const HEROES_STATE_NAME = 'heroes';
const getHeroesState = createFeatureSelector<HeroesState>(HEROES_STATE_NAME);

export const getHeroes = createSelector(getHeroesState, (state) => {
  return state.heroes;
});