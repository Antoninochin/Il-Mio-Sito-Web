
import { NgClass } from '@angular/common';
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
  
  games: Games[] = []
  screen: any;
  bttn: any;
  bttn2:number = 0
  bttn3:number = 0
  bttn4:number = 0
  
  
  constructor(private gamesService: GamesService, private activatedRoute:ActivatedRoute) {
  
   }
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
  
  // like(){
  //   if(this.bttn = document.querySelector('.bttn') as HTMLElement){;
  //   this.bttn.style.color ='red'
  //   }else if(this.bttn.style.color='red'){
  //     this.bttn.style.color ='grey'
  //   }
  //   console.log(this.like())
  // }
  like(){
    return this.bttn2++

  }
  like2(){
    return this.bttn3++
  }
  like3(){
    return this.bttn4++

  }
}

