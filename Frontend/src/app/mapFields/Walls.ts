import {MainScene} from "../gameLogic/MainScene";
import StaticGroup = Phaser.Physics.Arcade.StaticGroup;
import Sprite = Phaser.GameObjects.Sprite;

export class Walls {
  private scene: MainScene;
  private walls: StaticGroup;

  public constructor(scene: MainScene){
    this.walls = scene.physics.add.staticGroup();
    this.scene = scene;
  }

  public add(wall: Sprite){
    this.walls.add(wall);
  }

  public setCollider(){
    this.scene.physics.add.collider(this.scene.ship, this.walls);
    this.scene.physics.add.collider(this.scene.canons.canons, this.walls);
  }
}
