
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	// let like = document.getElementsByClassName('bttn') as HTMLCollectionOf<HTMLElement>;
  gameList:any
  
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    // this.gameService.getGamesAll().subscribe(
    //   resp => this.gameList = resp,
    //   error => console.log(error)
    // )


    // this.gameService.getGamesAll('https://rawg-video-games-database.p.rapidapi.com/games.json')
    // .subscribe((data:any) =>{
    //   console.log(data)
    //   this.gameList = data= Object.keys(data).map((key)=>{return data[key]})
    //   console.log(this.gameList)
    // })
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': '303df10c14msh14901127afe3b8bp121776jsnd0ba57cd245c',
    });
    this.gamesService.getGamesAll('https://rawg-video-games-database.p.rapidapi.com/games.json', {
      headers: headers
    })
    .subscribe(data => { console.log(data)})
  }
  like(){
    alert('Hai messo like')
  }
}
