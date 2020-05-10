import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {MapService} from "./map.service";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient, private authService: AuthService, private mapService: MapService) { }

  saveScore(score: number){
    console.log('saving');
    console.log(this.mapService.currentMap);
    console.log(this.authService.name.toString());
    console.log(score.toString());
    if(this.authService.isLoggedIn()){
      const params = new HttpParams()
        .set('mapId', this.mapService.currentMap)
        .set('user', this.authService.name.toString())
        .set('score', score.toString());
      this.http.get('/api/score', {
        params: params,
        responseType: 'text'
      }).subscribe((result: any) =>
        {console.log(result);}
        // {this.leaderboard = result.score;}
      )
    }
  }
}
