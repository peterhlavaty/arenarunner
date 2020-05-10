import {Injectable} from "@angular/core";
import Scene = Phaser.Scene;
import {SceneName} from "../enums/SceneName";
import {Result} from "./data/Result";
import Text = Phaser.GameObjects.Text;
import {Score} from "./Score";
import {Constants} from "./data/Constants";
import {ScoreService} from "../score.service";
import {green} from "color-name";

@Injectable()
export class ResultsScene extends Scene{

  private scoreText: Text;
  private resultText: Text;
  private result: Result;

  public constructor(public scoreService: ScoreService) {
    super({ key: SceneName.RESULTS});
  }

  init(result:Result){
    this.result = result;
  }

  create(){
    this.resultText = this.add.text(Constants.WIDTH/2, Constants.HEIGHT/2, this.result.score.success?Score.SUCCESS_TEXT: Score.FAIL_TEXT).setFontSize(50)
      .setColor(this.result.score.success?'green':'red');
    const score = this.result.score.getScore();
    this.scoreText = this.add.text(Constants.WIDTH/2,Constants.HEIGHT/2 + Constants.HEIGHT/7, 'Score: ' + score).setFontSize(30);
    this.scoreService.saveScore(score);

    this.input.once('pointerdown', function () {

      console.log('back to start');
      this.scene.start(SceneName.INIT);

    }, this);
  }

  update(){
    console.log('end update');
  }
}
