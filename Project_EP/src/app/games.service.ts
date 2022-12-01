import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env}from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
//  private url = 'https://rawg-video-games-database.p.rapidapi.com/games.json'

  constructor( private http: HttpClient) { }

 getGamesAll(url:string, body: {}){
    // return this.http.get<Games[]>(url, body)
    return this.http.get<APIResponse<Games>>(`${env.BASE_URL}/games`,{
    });
   }
  
  // getGameId(id:number){
  //   return this.http.get(this.url+id)
  // }

  // deleteGame(id: number) {
  //  return this.http.delete(this.url + id);
  // }

  // getGamesList(
  //   ordering: string,
  //   search?: string,
  // ): Observable<APIResponse<Games>>{
  //   let params = new HttpParams().set('ordering', ordering);
  //   if(search){
  //     params = new HttpParams().set('ordering', ordering).set('search', search);
  //   }
  //   return this.http.get<APIResponse<Games>>(`${env.BASE_URL}/games`,{
  //     params:params,
  //   });
  // }
}

