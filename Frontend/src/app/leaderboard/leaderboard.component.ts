import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface Leader {
  name: string;
  score: string;
  no: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'score'];
  // dataSource = ELEMENT_DATA;
  leaderboard: Leader[];

  constructor(private http: HttpClient) {
  }

  private getLeaderboard() {
    // this.http.get('http://localhost:8080/api/leaderboard')
    this.http.get('/api/leaderboard')
      .subscribe((result: any) =>
        {this.leaderboard = result}
      )
  }

  ngOnInit(): void {
    this.getLeaderboard();
  }

}
