import {
    loadHeroesSuccess,
  } from './heroes.action';
  import { createReducer, on } from '@ngrx/store';
  import { initialState } from './heroes.state';
  
  const _heroesReducer = createReducer(
    initialState,
    on(loadHeroesSuccess, (state, action) => {
        return {
          ...state,
          heroes: action.heroes,
    };
    })
  );
  
  export function postsReducer(state, action) {
    return _heroesReducer(state, action);
  }