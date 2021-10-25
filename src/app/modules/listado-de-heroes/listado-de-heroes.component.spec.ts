import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { StoreModule } from '@ngrx/store';
import { HEROES_STATE_NAME } from '../../state/heroes.selector';
import { heroesReducer } from '../../state/heroes.reducer'
import { HeroesService } from '../../heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDeHeroesComponent ],
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forFeature(HEROES_STATE_NAME,heroesReducer)
      ],
      providers: [HeroesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
