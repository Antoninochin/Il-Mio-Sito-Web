import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
 private url = 'https://rawg-video-games-database.p.rapidapi.com/games.json'

  constructor( private http: HttpClient) { }

  getGamesAll(url:string, body: {}):Observable<Games[]>{
   return this.http.get<Games[]>(url, body)
  }
  
  getGameId(id:number){
    return this.http.get(this.url+id)
  }

  deleteGame(id: number) {
   return this.http.delete(this.url + id);
  }
}

