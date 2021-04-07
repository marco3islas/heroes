import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MarvelAppService} from 'src/app/servicios/marvel-app.service';


@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

    heroes: any [] = [];


  constructor( private marvel: MarvelAppService,
               private router: Router) {
      this.marvel.getHeroes()
      .subscribe(( resp:any ) =>{
          console.log(resp.data.results);
          this.heroes = resp.data.results;
      });

  }
    buscar(encontrar: string){
        console.log(encontrar);
        this.marvel.getMarvelPersonaje(encontrar)
        .subscribe( (data: any) =>{
            console.log(data.data.results);
            this.heroes = data.data.results;
        });
    }
    irDetalles( encontrar: string){
        this.router.navigate(['/heroe', encontrar]);
    }

  ngOnInit(): void {
  }

}
