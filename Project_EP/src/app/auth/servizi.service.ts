import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {
  isLoggedIn = false;
  constructor(private http: HttpClient) { }

  signUp(obj: Users) {
    return this.http.post(environment.urlAPI + 'sign-up', obj);
  }

  login(obj: Users) {
    return this.http.post(environment.urlAPI + 'login', obj);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

}
