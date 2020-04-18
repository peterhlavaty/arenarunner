import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public register(userInfo: User) {
    const params = new HttpParams()
      .set('name', userInfo.nick)
      .set('password', userInfo.password);
    this.http.get('/api/register', {params: params})
      .subscribe((result: any) =>
        {console.log(result);}
        // {this.leaderboard = result.score;}
      )
  }
}
