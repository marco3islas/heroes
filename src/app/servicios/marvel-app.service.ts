import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelAppService {

  constructor( private http: HttpClient) {
    console.log('Marvel service listo para usar');
  }
    getHeroes(){
       return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=721d0aab910e7f3daa868a730590ed09&hash=fb94b00e8cf71e51a466d9882674598b');     
}

getMarvelPersonaje( encontrar: string){
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${encontrar}&limit=15&apikey=721d0aab910e7f3daa868a730590ed09`);
}
getMarvelStories(){
    return this.http.get(`https://gateway.marvel.com:443/v1/public/comics?apikey=721d0aab910e7f3daa868a730590ed09`);
}

}

