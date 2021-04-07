import { Component, OnInit } from '@angular/core';
import {HeroApiService} from 'src/app/servicios/heroApi.service';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

    superHeroes: any [] = [];

  constructor(private superHeroe: HeroApiService) {
      this.superHeroe.getPersonajesComics()
      .subscribe(( resp: any) =>{
          console.log(resp);
      });
  };



  ngOnInit(): void {
  }

}
