import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public name = '';

  public login(userInfo: User){
    return this.http.post('/api/login', {
      'name': userInfo.nick,
      'password': userInfo.password,
    }, {responseType: 'text'})
  }

  public isLoggedIn(){
    return this.name.length > 0;
  }

  public logout(){
    this.name = '';
  }

  public register(userInfo: User) {
    return this.http.post('/api/register', {
      'name': userInfo.nick,
      'password': userInfo.password,
    },{responseType: 'text'})
  }
}
