import {MainScene} from "../gameLogic/MainScene";
import Group = Phaser.GameObjects.Group;
import Sprite = Phaser.Physics.Arcade.Sprite;
import {CanonData} from "./data/CanonData";
import {TextureName} from "../enums/TextureName";
import {Bullets} from "./Bullets";

export class Canons {

  private scene: MainScene;
  public readonly canons: Group;

  public static readonly speed = 100;
  public static readonly LEFT_CANON_ANGLE = 0;
  public static readonly RIGHT_CANON_ANGLE = 180;
  public static readonly UP_CANON_ANGLE = 90;
  public static readonly DOWN_CANON_ANGLE = -90;


  public static readonly colliders = new Map([
    [Canons.LEFT_CANON_ANGLE, new CanonData(1,0)],
    [Canons.RIGHT_CANON_ANGLE, new CanonData(-1,0)],
    [-Canons.RIGHT_CANON_ANGLE, new CanonData(-1,0)],
    [Canons.UP_CANON_ANGLE, new CanonData(0,1)],
    [Canons.DOWN_CANON_ANGLE, new CanonData(0,-1)],
  ]);

  public constructor(scene: MainScene){
    this.scene = scene;
    this.canons = scene.physics.add.group();
  }

  public add(canon: Sprite){
    this.canons.add(canon);
  }

  public setCollider(){
    this.scene.physics.add.overlap(this.scene.ship, this.canons, this.shoot, null, this);
    // this.scene.physics.collide(this.scene.ship, this.canons,);
  }


  private async shoot(ship:Sprite, canon:Sprite){
    const bullet = this.scene.physics.add.sprite(canon.x+Canons.colliders.get(canon.angle).X*this.scene.gridSize/2+Canons.colliders.get(canon.angle).X*this.scene.gridSize/Bullets.BULLET_SIZE_RATIO,
      canon.y+Canons.colliders.get(canon.angle).Y*this.scene.gridSize/2+Canons.colliders.get(canon.angle).Y*this.scene.gridSize/Bullets.BULLET_SIZE_RATIO,
      TextureName.BULLET).disableBody(true,true);
    // await this.delay(100);
    bullet.setDisplaySize(this.scene.gridSize/Bullets.BULLET_SIZE_RATIO, this.scene.gridSize/Bullets.BULLET_SIZE_RATIO);
    bullet.enableBody(false,0,0,true,true);
    bullet.setVelocity(Canons.colliders.get(canon.angle).X*Canons.speed, Canons.colliders.get(canon.angle).Y*Canons.speed);
    this.scene.bullets.setCollider(bullet);
    const velocityX = canon.body.velocity.x;
    const velocityY = canon.body.velocity.y;
    canon.disableBody(true, false);
    await this.delay(1000);
    canon.enableBody(false, canon.x, canon.y,true, true);
    canon.setVelocity(velocityX, velocityY);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
