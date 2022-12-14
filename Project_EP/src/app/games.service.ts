import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env}from 'src/environments/environment';
import { Observable, shareReplay} from 'rxjs';
import { APIResponse, Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  constructor( private http: HttpClient) { }

 getGamesAll(url:string, body: {}){

    return this.http.get<APIResponse<Games>>(`${env.BASE_URL}/games`,{
    })//.pipe(shareReplay(1));
   }
   
   getGame(games:string){
    return this.http.get<APIResponse<Games>>(`${env.BASE_URL}/games/search?q=${games}`);
   }

   getSearchGame(name:string){
    const response = new Promise(resolve =>{
      this.http.get(`${env.BASE_URL}` + `/games?q=${name}`).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err)
      });
    });
    return response;
   }
   

}

