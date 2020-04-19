import {Injectable} from "@angular/core";
import Scene = Phaser.Scene;
import {HttpClient} from "@angular/common/http";
import {SceneName} from "../enums/SceneName";
import {Result} from "./data/Result";
import Text = Phaser.GameObjects.Text;
import {Score} from "./Score";
import {Constants} from "./data/Constants";

@Injectable()
export class ResultsScene extends Scene{

  private scoreText: Text;
  private resultText: Text;
  private result: Result;

  public constructor(private http: HttpClient) {
    super({ key: SceneName.RESULTS});
  }

  init(result:Result){
    this.result = result;
  }

  create(){
    this.resultText = this.add.text(Constants.WIDTH/2, Constants.HEIGHT/2, this.result.score.success?Score.SUCCESS_TEXT: Score.FAIL_TEXT);
    this.scoreText = this.add.text(Constants.WIDTH/2,Constants.HEIGHT/2 + Constants.HEIGHT/7, 'Score: ' + this.result.score.getScore()).setFontSize(30);

    this.input.once('pointerdown', function () {

      console.log('back to start');
      this.scene.start(SceneName.INIT);

    }, this);
  }

  update(){
    console.log('end update');
  }
}
