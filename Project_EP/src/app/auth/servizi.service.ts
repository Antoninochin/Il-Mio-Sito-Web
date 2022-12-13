import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {
  isLoggedIn = false;
  user?: Users
  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated() {
    return this.isLoggedIn;
  }
  signUp(obj: Users) {
    return this.http.post(`${environment.urlAPI}` + 'sign-up', obj);
  }

  login(obj: Users) {
    return this.http.get(`${environment.urlAPI}users`);
  }

  // logout(){
  //   this.isLoggedIn = false
  //   localStorage.removeItem('userLogin')
  //   this.user = null
  //   this.router.navigate(['/login'])
  // }
  logout() {
    return this.http.delete<Users>(`${environment.urlAPI}/users/`)
  }
  // this.router.navigate(['/login'])
}
