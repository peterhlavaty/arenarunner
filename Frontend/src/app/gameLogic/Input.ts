import Phaser from "phaser";
import Key = Phaser.Input.Keyboard.Key;
import Sprite = Phaser.GameObjects.Sprite;
import {MainScene} from "./MainScene";
import Body = Phaser.Physics.Arcade.Body;

export class Input {

  private readonly speed = 5*60;
  private readonly leftDir: Direction;
  private readonly rightDir: Direction;
  private readonly upDir: Direction;
  private readonly downDir: Direction;
  private readonly noDir: Direction;

  private readonly ship:Sprite;
  private readonly scene:MainScene;

  private left:Key;
  private right:Key;
  private up:Key;
  private down:Key;
  // private turn: Direction = null;
  private currDir: Direction;

  public constructor(ship:Sprite, scene:any){
    this.ship = ship;
    this.scene = scene;

    this.leftDir = new Direction('x', -1, (pos) => {return pos>this.scene.gridSize}, -90);
    this.rightDir = new Direction('x', 1, (pos) => {return pos<this.scene.width-this.scene.gridSize}, 90);
    this.upDir = new Direction('y', -1, (pos) => {return pos>this.scene.gridSize}, 0);
    this.downDir = new Direction('y', 1, (pos) => {return pos<this.scene.height-this.scene.gridSize}, 180);
    this.noDir = new Direction('z', 1, () => {return true}, 0);
    this.currDir = this.noDir;
  }

  public defineKeys(){
    this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR);
    this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX);
    this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT);
    this.down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FIVE);
  }

  public move(){

    if (this.left.isDown){
      this.turn(this.leftDir);
    }

    else if (this.right.isDown){
      this.turn(this.rightDir);
    }

    else if (this.up.isDown){
      this.turn(this.upDir);
    }

    else if (this.down.isDown){
      this.turn(this.downDir);
    }

  //   let newPos = this.ship[this.currDir.axis]+this.currDir.sign*this.speed;
  //   const oldGrid = Math.floor(this.ship[this.currDir.axis]/this.scene.gridSize);
  //   const newGrid = Math.floor(newPos/this.scene.gridSize);
  //   if(this.turn!=null&&((this.ship[this.currDir.axis]%this.scene.gridSize==0)||(oldGrid!==newGrid))){
  //     this.ship[this.currDir.axis] = Math.max(oldGrid, newGrid)*this.scene.gridSize;
  //     this.ship.angle = this.turn.angle;
  //     this.currDir = this.turn;
  //     this.turn = null;
  //     newPos = this.ship[this.currDir.axis]+this.currDir.sign*this.speed;
  //     this.setPos(this.ship[this.currDir.axis], newPos, oldGrid, newGrid);
  //   }
  //   else{
  //     this.setPos(this.ship[this.currDir.axis], newPos, oldGrid, newGrid);
  //   }
  }

  private turn(newDir: Direction){
    this.ship.angle = newDir.angle;
    this.currDir = newDir;
    this.setVelocity();
  }

  // private tryTurn(newDir: Direction){
  //   if(this.currDir.axis===newDir.axis){
  //     this.ship.angle = newDir.angle;
  //     this.currDir = newDir;
  //     this.setVelocity();
  //     this.turn = null;
  //   }
  //   else{
  //     this.turn = newDir;
  //   }
  // }

  // private setPos(currPos:number, newPos:number, oldGrid:number, newGrid:number){
  //   if(this.currDir.canGo(newPos)){
  //     this.ship[this.currDir.axis] = newPos;
  //   }
  //   else if(this.currDir.canGo(currPos)){
  //     this.ship[this.currDir.axis] = Math.max(oldGrid, newGrid)*this.scene.gridSize;
  //   }
  // }

  private setVelocity(){
    if(this.currDir.axis==='x') {
      this.setVelocityY(this.ship, 0);
      this.setVelocityX(this.ship, this.speed*this.currDir.sign);
    }else{
      this.setVelocityX(this.ship, 0);
      this.setVelocityY(this.ship, this.speed*this.currDir.sign);
    }
  }

  private setVelocityX(obj:Sprite, velocity:number){
    (<Body>obj.body).setVelocityX(velocity);
  }

  private setVelocityY(obj:Sprite, velocity:number){
    (<Body>obj.body).setVelocityY(velocity);
  }

  // test(){
  //   this.direction = this.leftCoord;
  //   this.turn = this.rightCoord;
  //   this.direction = this.turn;
  //   this.turn = null;
  //   return this.turn;
  // }
}

class Direction{
  axis: string;
  sign: number;
  canGo: (pos:number) => boolean;
  angle: number

  constructor(axis: string, sign: number, canGo: (pos:number) => boolean, angle: number){
    this.axis = axis;
    this.sign = sign;
    this.canGo = canGo;
    this.angle = angle;
  }
}

// class Coordinates {
//   x: number;
//   y: number;
//
//   constructor(x:number=0, y:number=0){
//     this.x = x;
//     this.y = y;
//   }
//
//   equals(other: Coordinates):boolean {
//     if (this === other) return true;
//     if (other == null) return false;
//     if (other.y == this.y && other.x == this.x) return true;
//     return false;
//   }
// }

