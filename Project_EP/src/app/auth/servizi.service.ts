import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http: HttpClient) { }
url = ''
  signup(obj: Users) {
    return this.http.post(this.url + 'sign-up', obj);
  }
}
