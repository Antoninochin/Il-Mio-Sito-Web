import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {
  isLoggedIn = true;
  users: Users[] = []
  constructor(private http: HttpClient, private router: Router) { }

  
  signup(obj: Users) {
    return this.http.post(environment.urlAPI + 'users', obj);
  }

  login(obj: Users) {
    return this.http.post(environment.urlAPI + 'users', obj);
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
  getUser(id:number){
    return this.http.get(environment.urlAPI + 'users/' + id)
  }
  logout() {
  //  return this.http.delete<Users>(environment.urlAPI + 'users/')
   this.router.navigate(['/login'])
  this.isLoggedIn = false
    localStorage.removeItem('user')
  }
}
