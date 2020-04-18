import {MainScene} from "../gameLogic/MainScene";
import Sprite = Phaser.Physics.Arcade.Sprite;
import {SceneName} from "../enums/SceneName";
import {Result} from "../gameLogic/data/Result";

export class Bullets {

  public static readonly BULLET_SIZE_RATIO = 6;

  private scene:MainScene;
  private dead = false;

  public constructor(scene:MainScene){
    this.scene = scene;
  }

  public setCollider(bullet:Sprite){
    this.scene.physics.add.overlap(this.scene.borders.borders, bullet, this.destroy, null, this);
    this.scene.physics.add.overlap(this.scene.ship, bullet, this.destroyShip, null, this);
  }

  private destroy(bullet:Sprite, border:Sprite){
    bullet.destroy();
  }

  private destroyShip(ship:Sprite, bullet:Sprite){
    // if(!this.dead){
      this.dead = true;
      this.scene.loseLife();
      if(this.scene.score.lives>0){
        bullet.destroy();
      }
      else{
        this.scene.endGame(false);
      }
    // }
  }
}
