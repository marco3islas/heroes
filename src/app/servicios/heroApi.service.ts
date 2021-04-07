import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';



@Injectable({
    providedIn: 'root'
})

export class HeroApiService{

    constructor( private http: HttpClient){
        console.log('SuperHero Api Lista para servir inforcion.');
    }
    getPersonajesComics( ){
        return this.http.get('https://superheroapi.com/api/4300661616629273/490');
    }
}


