import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListadoComponent } from './pokemon-listado/pokemon-listado.component';
import { PokemonCartasComponent } from './pokemon-cartas/pokemon-cartas.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListadoComponent,
    PokemonCartasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
