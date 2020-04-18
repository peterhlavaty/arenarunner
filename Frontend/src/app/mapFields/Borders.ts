import {MainScene} from "../gameLogic/MainScene";
import StaticGroup = Phaser.Physics.Arcade.StaticGroup;
import Sprite = Phaser.GameObjects.Sprite;

export class Borders {
  private scene: MainScene;
  public borders: StaticGroup;

  public constructor(scene: MainScene){
    this.borders = scene.physics.add.staticGroup();
    this.scene = scene;
  }

  public add(border: Sprite){
    this.borders.add(border);
  }

  public setCollider(){
    this.scene.physics.add.collider(this.scene.ship, this.borders);
  }
}
