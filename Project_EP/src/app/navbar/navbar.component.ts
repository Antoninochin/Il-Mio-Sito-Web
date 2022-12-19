import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  games: Games[] = []
  users: Users[] = []
  data:any;
  constructor( private router: Router,private gamesService: GamesService,private authService: ServiziService, private activatedRoute: ActivatedRoute) {
  
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
    
  }
  onSearch(name:any){
    const keyword = name.target.value;
    const search = this.gamesService.getSearchGame(keyword).then(response =>{
      this.data = response;
      console.log(this.data)
    });
  }
  
  onLogout(){
   this.authService.logout()
  }

}
