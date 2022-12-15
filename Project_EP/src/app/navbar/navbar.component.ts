import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ServiziService } from '../auth/servizi.service';
import { Users } from '../auth/users';
import { APIResponse, Games } from '../games';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name:any
  user:any
  
  // searchForm: FormGroup = new FormGroup({
  //   search: new FormControl(''),
  // })
  games: Games[] = []
  users: Users[] = []
  constructor( private router: Router,private gamesService: GamesService,private authService: ServiziService) {
    // this.searchForm.get('search')?.valueChanges.pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   switchMap((v)=> this.gamesService.getGame(v))
    // )
    // .subscribe((v) =>{
    //   this.games = v?.games
    //   console.log(this.games)
    // })
   }

  private url = 'https://rawg-video-games-database.p.rapidapi.com/games.json'
  ngOnInit(): void {

    if(localStorage.getItem('user')){
      this.name = localStorage.getItem('user')
      this.user = JSON.parse(this.name)
    }
    // if(this.authService.isLoggedIn = true){
    //   this.authService.getUser(this.name.id).subscribe((data)=>{
    //     console.log(data)
    //   })
    // }
    
    // let headers = new HttpHeaders({
    //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
    //   'X-RapidAPI-Key': '303df10c14msh14901127afe3b8bp121776jsnd0ba57cd245c',
    // });
    // this.gamesService.getGamesAll(this.url, {
    //   headers: headers}).subscribe((gameList: APIResponse<Games>) =>{
    //    this.games = gameList.results;
    //   console.log(this.games)
    // });
  }
  
  onLogout(){
   this.authService.logout()
  }

  // onSubmit(form: NgForm){
  //   this.router.navigate(['search', form.value.search])
  // }
}
