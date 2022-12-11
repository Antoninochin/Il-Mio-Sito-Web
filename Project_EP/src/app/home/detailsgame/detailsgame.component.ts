import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIResponse, Games } from 'src/app/games';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-detailsgame',
  templateUrl: './detailsgame.component.html',
  styleUrls: ['./detailsgame.component.scss']
})
export class DetailsgameComponent implements OnInit {
games: Games[] = []

  constructor(private gamesService: GamesService) { }
  private url = 'https://rawg-video-games-database.p.rapidapi.com/games.json'
  ngOnInit(): void {
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': '303df10c14msh14901127afe3b8bp121776jsnd0ba57cd245c',
    });
    
     this.gamesService.getGamesAll(this.url, {
      headers: headers}).subscribe((gameList: APIResponse<Games>) =>{
       this.games = gameList.results;

       console.log(this.games)
    });
  }
  getKeys(obj: any){
    return Object.keys(obj)
  }
}
