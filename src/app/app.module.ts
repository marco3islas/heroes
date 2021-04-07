import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Servicios
import {HeroesService} from './servicios/heroes.service';
import {MarvelAppService} from './servicios/marvel-app.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { SuperHeroComponent } from './components/super-hero/super-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    TarjetaComponent,
    MarvelComponent,
    SuperHeroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [
    HeroesService,
      MarvelAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
