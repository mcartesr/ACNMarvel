# ACNMarvel


Cuando trabajamos con redux trabajamos con un patron de diseño de arquitectura para construir nuestra aplicación y nuestros componentes. esta libreria nos permitira trabajar los STATES (estados) de la aplicacion y bajo esta arquitectura veremos como 

dentro de la arquitectura de NGRX utilizaremos constantemente la definicion de estos elementos/Funciones que nos ayudaran a construir la aplicación
- ACTION
- EFFECT
- REDUCER
- STATE
- SELECTOR
- STORE

el primer paso es crear el archivo que almacenara la estructura de nuestro STATE

import { Job } from "../interfaces/job"; importamos nuestra interfaz el cual es la estructura con el cual manejaremos nuestro STATE

definimos el estado inicial de nuestro state

export const initialState : JobsState = {
    jobs: null, 
};
export interface JobsState{
    jobs: Job[];
}

El orden de ejecución de este patron seria de la siguiente forma

Angular Component -> Action  ->  Effects -> Services
                             <-

Action -> Reducer -> Selector -> Angular Component

ACTIONS: En el archivo action crearemos las acciones las cuales expresan eventos únicos que ocurren a lo largo de la aplicación
se le puede pasar un payload o informacion determinada para cada acción 

Para crear acciones debemos importar la función CreateAction desde la libreria @ngrx/store
Ejemplo creando una acción

// importamos la funcion createAction desde la libreria "@ngrx/store" el cual recibe como parametro un String que debe ser una descripcion  del tipo de accion y opcionalmente un payload.

// Ejemplo de importacion de la funcion createAction
import { createAction } from "@ngrx/store";

// Definición de la variable a la cual pasaremos como parametro a la funcion createAction
export const LOAD_JOBS = '[Load Jobs] load Jobs';
export const LOAD_JOBS_SUCCESS = '[Load Jobs] load Jobs success';

// creamos la accion pasandole el nombre que definimos anteriormente
export const loadJobs = createAction(LOAD_JOBS);
export const loadJobsSuccess = createAction(
    LOAD_JOBS_SUCCESS, 
    props<{ jobs: Job[] }>() 
    );
NOTA: en la accion loadJobsSuccess retornamos en este evento un arreglo de la interfaz Job en los props

Las acciones estas correlacionadas con los effects que veremos ahora cual es la rol de esta funcion de estos en nuestra aplicación


EFFECTS: En una aplicación Angular basada en servicios, los componentes son responsables de interactuar con recursos externos directamente a través de los servicios. En cambio, los effects proporcionan una forma de interactuar con esos servicios y aislarlos de los componentes. Los effects son donde se maneja tareas como la obtención de datos, tareas de larga ejecución que producen múltiples eventos y otras interacciones externas donde sus componentes no necesitan un conocimiento explícito de estas interacciones.

//NOTA
Los effects comienzan a ejecutarse inmediatamente después de que se carga el AppModule para garantizar que estén escuchando todas las acciones relevantes lo antes posible.


a continuacion veremos como crearemos un effect a travez de la funcion createEffect de @ngrx/effects

desde @ngrx/effects importaremos la funcion Actions, createEffect y ofType.
import { Actions, createEffect, ofType } from '@ngrx/effects';

declaramos en el constructor de la clase un auxiliar que hara referencia a la funcion Actions y tambien declararemos nuestro Service, ambos como variables private.
 constructor(private actions$: Actions, private jobsService: jobsService) {}

  loadJobs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadJobs), // pasamos como parametro nuestra action loadJobs
      mergeMap((action) => {
        return this.jobsService.getJobs().pipe( // retornamos el response de nuestro servicio para mapear esa respuesta que deberia ser un arreglo de nuestra interfaz Job y retornar 
          map((jobs) => {                       // otra accion de tipo loadJobsSuccess con el arreglo que acabamos de mapear de nuestro servicio
            return loadJobsSuccess({ jobs });
          })
        );
      })
    );
  });
  
Reducer: Los reducers en NgRx son responsables de manejar las transiciones de un estado al siguiente en la aplicación. Las funciones reducers manejan estas transiciones determinando qué acciones manejar según el tipo de acción. crearemos reducer a travez de la funcion createReducer y la funcion on de la libreria "@ngrx/store"

Las funciones reducers son puras en el sentido de que producen la misma salida para una entrada determinada. No tienen efectos secundarios y manejan cada transición de estado de forma sincrónica. Cada función reducer toma la última acción enviada, el estado actual, y determina si devolver un estado recién modificado o el estado original para almacenarla en nuestro STORE.


Ejemplo de como trabajar con reducers

import { loadJobsSuccess } from './jobs.action'; // importamos la accion loadJobsSuccess
import { createReducer, on } from '@ngrx/store'; 
import { initialState } from './jobs.state'; 

Nota: cada state deberia tener un estado inicial (InitialState)
  
  const _jobsReducer = createReducer(
    initialState,
    on(loadJobsSuccess, (state, action) => {
        return {
          ...state,
          jobs: action.jobs,
    };
    })
  );
  
  export function jobsReducer(state, action) {
    return _jobsReducer(state, action);
  }


Selectors: Los selectors son funciones que se utilizan para obtener segmentos del STATE en la STORE, para crear selectores importaremos las funciones createFeatureSelector y createSelector desde '@ngrx/store';

import { JobsState } from './jobs.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const JOBS_STATE_NAME = 'jobs'; // definimos una constante el cual debemos llamar de la misma forma por el cual queremos identificara cual es el state que queremos retornar

const getJobsState = createFeatureSelector<JobsState>(JOBS_STATE_NAME); // definimos una constante auxiliar que hara referencia a la funcion createFeatureSelector pasamos como parametro la variable JOBS_STATE_NAME que definimos.

// declaramos otra constante que se encargara de hacer un call a la funcion createSelector el cual pasaremos como parametro el auxiliar getJobsState que hace referencia a createFeatureSelector que obtendra el state jobs del objeto "JobsState" de nuestro archivo STATE
export const getJobs = createSelector(getJobsState, (state: JobsState) => {
  return state.jobs; // retornamos el state jobs y con esto retornariamos la informacion que necesita nuestro componente
});