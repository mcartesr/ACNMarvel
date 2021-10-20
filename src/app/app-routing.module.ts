import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'listado-heroes', loadChildren: () => import('./modules/listado-de-heroes/listado-de-heroes.module')
  .then(m => m.ListadoDeHeroesModule)},
  { path: 'heroe/:id', loadChildren: () => import('./modules/hero-profile/hero-profile.module')
  .then(m => m.HeroProfileModule)},
  { path: '**', redirectTo: '/listado-heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

