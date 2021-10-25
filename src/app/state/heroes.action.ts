import { Heroe } from "../interfaces/heroe";
import { createAction, props } from "@ngrx/store";

export const LOAD_HEROES = '[Load Heroes] load heroes';
export const LOAD_HEROES_SUCCESS = '[Load Heroes] load heroes success';

export const loadHeroes = createAction(LOAD_HEROES);
export const loadHeroesSuccess = createAction(
    LOAD_HEROES_SUCCESS, 
    props<{ heroes: Heroe[] }>()
    );


// En el archivo action crearemos las acciones las cuales expresan eventos únicos que ocurren a lo largo de su aplicación
// se le puede pasar un payload o informacion determinada para cada acción 

// Para crear acciones debemos importar el metodo CreateAction desde la libreria @ngrx/store

// Ejemplo creando una acción
// export const LOAD_JOBS = '[Load Jobs] load Jobs';
