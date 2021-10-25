import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HeroesService } from '../../heroes.service';
import { StoreModule } from '@ngrx/store';
import { HEROES_STATE_NAME } from '../../state/heroes.selector';
import { heroesReducer } from '../../state/heroes.reducer'
import { HeroProfileComponent } from './hero-profile.component';

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroProfileComponent ],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule,StoreModule.forRoot({}), StoreModule.forFeature(HEROES_STATE_NAME,heroesReducer)   ],
      providers: [HeroesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
