import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
// private url = 'https://rawg-video-games-database.p.rapidapi.com/games.json'

  constructor( private http: HttpClient) { }

  // getGamesAll(): Observable<any>{
  //   return this.http.get(this.url)
  // }
   getGamesAll(url:string, body: {}){
   return this.http.get(url, body)
}
  }

