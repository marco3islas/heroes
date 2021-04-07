import { Component, OnInit } from '@angular/core';
import { HeroesService  } from '../../servicios/heroes.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: any[] = [];
  buscando: string;

  constructor( private _heroesService: HeroesService,
               private activatedRoute: ActivatedRoute) {
              }

  ngOnInit(): void {
                this.activatedRoute.params.subscribe( params =>{
                this.buscando = params['termino'];
                this.termino = this._heroesService.buscarHeroe( params['termino'] );
                });
  }

}
