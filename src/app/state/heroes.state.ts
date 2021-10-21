import { Heroe } from "../interfaces/heroe";


export const initialState : HeroesState = {
    heroes: null, 
};

export interface HeroesState{
    heroes: Heroe[];
}

 
