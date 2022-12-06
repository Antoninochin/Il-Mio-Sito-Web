
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse, Games } from 'src/app/games';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
	// let like = document.getElementsByClassName('bttn') as HTMLCollectionOf<HTMLElement>;
  games: Games[] = []

  constructor(private gamesService: GamesService, private activatedRoute:ActivatedRoute) { }
  private url = 'https://rawg-video-games-database.p.rapidapi.com/games.json'
  ngOnInit(): void {
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': '303df10c14msh14901127afe3b8bp121776jsnd0ba57cd245c',
    });
    // this.gamesService.getGamesAll(this.url, {
    //   headers: headers,
    //   }).subscribe((gameList: APIResponse<Games>) =>{
    //  this.games = gameList.results;
    //  console.log(gameList)
    // });
     this.gamesService.getGame(this.url, {
      headers: headers}).subscribe((gameList: APIResponse<Games>) =>{
       this.games = gameList.results;
      //  for(let i =0; i < gameList.results.length, i++;){
      //   if (gameList.results === gameList.results[i])
      //   i++
      //  }
       console.log(this.games)
    });
  }

  like(onClick:any): any{
   if(onClick){
    return '.like';
   }
  } 
}

