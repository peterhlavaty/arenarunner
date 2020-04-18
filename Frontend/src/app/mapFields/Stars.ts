import {Score} from "../gameLogic/Score";
import Group = Phaser.GameObjects.Group;
import Text = Phaser.GameObjects.Text;
import {MainScene} from "../gameLogic/MainScene";
import Sprite = Phaser.GameObjects.Sprite;

export class Stars {

  private score: Score;
  private scoreText: Text;
  private stars: Group;
  private scene: MainScene;

  public constructor(scene: MainScene){
    this.score = scene.score;
    this.scoreText = scene.scoreText;
    this.stars = scene.physics.add.group();
    this.scene = scene;
  }

  public add(star: Sprite){
    this.stars.add(star);
  }

  public setCollider(){
    this.scene.physics.add.overlap(this.scene.ship, this.stars, this.collectStar, null, this);
  }

  private collectStar(ship, star){
    this.score.collectedStars++;
    this.scoreText.setText('Stars: ' + this.score.collectedStars);
    star.destroy();
    if(this.score.collectedStars===this.score.starSum){
      this.scene.endGame(true);
    }
  }
}
