import Scene = Phaser.Scene;
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SceneName} from "../enums/SceneName";
import {TextureName} from "../enums/TextureName";
import {MapField} from "../mapFields/MapField";
import {Canons} from "../mapFields/Canons";

@Injectable({
  providedIn: "root"
})
export class InitScene extends Scene{

  private map:MapField[][][] = [];

  // private defaultMap =
  //   [
  //     [[new MapField(TextureName.WALL)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.LEFT_CANON_ANGLE)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.WALL)]],
  //     [[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.UP_CANON_ANGLE)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
  //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.DOWN_CANON_ANGLE)]],
  //     [[new MapField(TextureName.WALL)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.RIGHT_CANON_ANGLE)],[new MapField(TextureName.WALL)]]
  //   ]

  private defaultMap =
    [
      [[new MapField(TextureName.WALL)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.LEFT_CANON_ANGLE)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.WALL)]],
      [[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.UP_CANON_ANGLE)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.STAR)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
      [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.DOWN_CANON_ANGLE)]],
      [[new MapField(TextureName.WALL)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.RIGHT_CANON_ANGLE)],[new MapField(TextureName.WALL)]]
    ];

  public constructor(private http: HttpClient) {
    super({ key: SceneName.INIT});
  }

  preload(){

  }

  create(){
    //this.http.get();
    for(let i=0;i<10;i++){
      this.map.push([]);
      for(let j=0;j<10;j++){
        this.map[i].push([]);
        this.map[i][j].push(new MapField(TextureName.EMPTY));
      }
    }

    this.map[0][0][0] = new MapField(TextureName.WALL);

    // this.defaultMap[0][0][0] = new MapField(TextureName.WALL);

    console.log(this.defaultMap);

    this.scene.start(SceneName.MAIN, this.defaultMap);
  }
}
