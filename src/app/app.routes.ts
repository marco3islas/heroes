import {  Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {MarvelComponent} from './components/marvel/marvel.component';
import {PersonajeComponent} from './components/personaje/personaje.component';
import {ComicComponent} from './components/personaje/comic/comic.component';

export const ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'buscar/:termino', component: BuscarComponent},
  { path: 'marvel', component: MarvelComponent},
  { path: 'personaje/:id', component: PersonajeComponent},
  { path: 'comic/:id', component: ComicComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'about'},
];

