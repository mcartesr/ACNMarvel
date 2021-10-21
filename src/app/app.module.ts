import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './heroes.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HEROES_STATE_NAME } from './state/heroes.selector';
import { heroesReducer } from './state/heroes.reducer'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(heroesReducer),
    EffectsModule.forRoot()
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
