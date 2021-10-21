import { Heroe } from "../interfaces/heroe";
import { createAction, props } from "@ngrx/store";

export const LOAD_HEROES = '[Load Heroes] load heroes';
export const LOAD_HEROES_SUCCESS = '[Load Heroes] load heroes success';

export const loadHeroes = createAction(LOAD_HEROES);
export const loadHeroesSuccess = createAction(
    LOAD_HEROES_SUCCESS, 
    props<{ heroes: Heroe[] }>()
    );


