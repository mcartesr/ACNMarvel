import { Heroe } from "../classes/heroe";

export interface HeroesState{
    heroes: Heroe[];
}

export const initialState : HeroesState = {
    heroes: null, 
};