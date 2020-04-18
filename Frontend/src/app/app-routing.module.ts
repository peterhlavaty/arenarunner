import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {GameComponent} from "./game/game.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'game', component: GameComponent },
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
