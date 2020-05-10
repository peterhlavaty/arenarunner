import {MainScene} from "../gameLogic/MainScene";
import Sprite = Phaser.Physics.Arcade.Sprite;

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

  private async destroyShip(ship:Sprite, bullet:Sprite){
    // if(!this.dead){
      this.dead = true;
      this.scene.loseLife();
      if(this.scene.score.lives>0){
        bullet.destroy();
        ship.tint = 0xff0000;
        await this.delay(200);
        ship.tint = 0xffffff;
      }
      else{
        this.scene.endGame(false);
      }
    // }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
