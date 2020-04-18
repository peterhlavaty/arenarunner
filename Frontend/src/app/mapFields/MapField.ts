import {TextureName} from "../enums/TextureName";

export class MapField {
  public angle:number;
  public type:TextureName;

  public constructor(type:TextureName, angle:number = 0){
    this.type = type;
    this.angle = angle;
  }
}
