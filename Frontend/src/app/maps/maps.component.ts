import { Component, OnInit } from '@angular/core';
import {MapService} from "../map.service";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  public maps: string[];

  constructor(public mapService: MapService) {

  }

  public setMap(map: string){
    this.mapService.currentMap = map;
  }

  ngOnInit(): void {
    this.mapService.getMaps().subscribe((result)=>{
      this.maps = Object.keys(result);
    });
  }

}
