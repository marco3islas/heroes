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
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { NodescripcionPipe } from './pipes/nodescripcion.pipe';
import { ComicComponent } from './components/personaje/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    TarjetaComponent,
    MarvelComponent,
    PersonajeComponent,
    LoadingComponent,
    NoimagePipe,
    NodescripcionPipe,
    ComicComponent,
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
