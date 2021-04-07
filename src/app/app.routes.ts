import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {MarvelComponent} from './components/marvel/marvel.component';
import {SuperHeroComponent} from './components/super-hero/super-hero.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'buscar/:termino', component: BuscarComponent},
  { path: 'marvel', component: MarvelComponent},
  { path: 'SuperHeroes', component: SuperHeroComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

