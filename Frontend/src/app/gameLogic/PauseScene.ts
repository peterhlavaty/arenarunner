import Scene = Phaser.Scene;
import {Injectable} from "@angular/core";
import {SceneName} from "../enums/SceneName";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class PauseScene extends Scene{

  public constructor(private http: HttpClient) {
    super({ key: SceneName.PAUSE });
  }

  // private pausedScene:Scene;

  // init(){
    // Phaser.Scene.call(this, { key: SceneName.PAUSE });
    // console.log('scene' + pausedScene);
    // this.pausedScene = pausedScene;
    // this.pausedScene.scene.pause();
  // }

  create() {
    this.input.once('pointerdown', function () {

      console.log('resume');
      this.scene.pause();
      this.scene.resume(SceneName.MAIN);

    }, this);
  }

  preload() {
    console.log('pause preload');
  }

  update() {
    console.log('pause update');
    // this.myInput.move();
    // this.input.keyboard.once('keydown_ESC', ()=>{
    //   this.pausedScene.scene.resume();
    // });
  }
}
