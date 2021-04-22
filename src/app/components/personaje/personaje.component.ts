import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelAppService} from 'src/app/servicios/marvel-app.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

    personaje: any = {};
    comics: any  = {};

    loading: boolean;

  constructor( private router: ActivatedRoute,
               private heroe: MarvelAppService,
  ) {

      this.loading = true;
      
      this.router.params.subscribe ( params => {


          this.getHeroe( params['id'] );
          this.getComics( params['id'] );

          this.loading = false;
          
      });
  }
    getHeroe( id: string ){
        this.heroe.getHeroe( id )
        .subscribe( ( personaje: any ) =>{
            this.personaje = personaje;
            console.log(personaje);
            this.comics = personaje.comics.items;
        });
    }

    getComics( id: string){
        this.heroe.getComics(id)
        .subscribe(( comics: any) =>{
            this.comics = comics;
            console.log(comics);
        });
    }
}
