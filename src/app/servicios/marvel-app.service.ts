import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelAppService {

  constructor( private http: HttpClient) {
    console.log('Marvel service listo para usar');
  }
    getQuery( query: string ){
        const url = `https://gateway.marvel.com:443/v1/public/${query}`;
        return this.http.get(url);
    }
    getHeroes(){
       return this.getQuery('characters?ts=1&apikey=721d0aab910e7f3daa868a730590ed09&hash=fb94b00e8cf71e51a466d9882674598b');     
}

getMarvelPersonaje( encontrar: string){
    return this.getQuery(`characters?nameStartsWith=${encontrar}&limit=15&apikey=721d0aab910e7f3daa868a730590ed09`);
}

getHeroe( id: string ){
    return this.getQuery(`characters/${id}?ts=1&apikey=721d0aab910e7f3daa868a730590ed09&hash=fb94b00e8cf71e51a466d9882674598b`)
    .pipe( map( data => {
        return data['data'].results[0];
    }));
}

getComics( id: string ){
    return this.getQuery(`characters/${id}/comics?ts=1&apikey=721d0aab910e7f3daa868a730590ed09&hash=fb94b00e8cf71e51a466d9882674598b`).pipe( map( data => {
        return data['data'].results;
    }));
}
}
