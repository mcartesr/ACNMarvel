import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../heroes.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getHeroes } from '../../state/heroes.selector';
import { loadHeroes } from '../../state/heroes.action';
import { HeroesState } from '../../state/heroes.state';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  heroes$ : Observable<Heroe[]>;
  
  // The child component : spinner
  @ViewChild('spi', { static: true }) spinner;
  /* public heroes: Array<Heroe> = []; */

  constructor(public heroesService: HeroesService, private router:Router, private store: Store<HeroesState>) { 

  
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }

  ngOnInit() {
    /* this.heroes.push(new Heroe(
      '1',
      'chiquitoman',
      'un man que es chiquito chiquito',
      new Date(),
      {
        'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334'
    ));

    this.heroes.push(new Heroe(
      '1',
      'chiquitoman 2',
      'un man que es chiquito chiquito',
      new Date(),
      {
        'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334'
    ));

    this.heroes.push(new Heroe(
      '1',
      'chiquitoman 3',
      'un man que es chiquito chiquito',
      new Date(),
      {
        'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334'
    ));

     */
    //this.spinner.toggle_spinner();

    /*
    this.heroes$.subscribe( heroes => {

      if(heroes === null){
        console.warn("primero es null")
      }else{
        for (let index = 0; index < heroes.length; index++) {
          const element = heroes[index];
          this.heroesList.push(element);
        }
      }
    })
    */
    this.heroes$ = this.store.select(getHeroes);
    console.warn(this.heroes$)
    this.store.dispatch(loadHeroes());

  
 }
}
