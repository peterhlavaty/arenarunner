import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapField} from "./mapFields/MapField";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public currentMap: string;

  constructor(private http: HttpClient) {}

  public getMaps(){
    return this.http.get("/api/maps");
  }
}
