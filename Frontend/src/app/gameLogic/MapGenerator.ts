import {MainScene} from "./MainScene";
import {TextureName} from "../enums/TextureName";
import {MapField} from "../mapFields/MapField";
import Sprite = Phaser.Physics.Arcade.Sprite;
import {Canons} from "../mapFields/Canons";

export class MapGenerator {

  private readonly typemap = new Map([
    [TextureName.BORDER, this.addBorder],
    [TextureName.WALL, this.addWall],
    [TextureName.EMPTY, ()=>{}],
    [TextureName.STAR, this.addStar],
    [TextureName.CANON, this.addCanon],
  ]);

  private scene;

  public constructor(scene: MainScene){
    this.scene = scene;
  }

  public generate():void{

    console.log('generate');
    this.scene.map.forEach((row, rowIndex)=>{
      row.forEach((column, columnIndex)=>{
        column.forEach((mapField, index)=>{
          this.typemap.get(mapField.type).call(this, mapField, rowIndex, columnIndex);
        })
      })
    });
    //add colliders
    this.scene.stars.setCollider();
    // this.borders.refresh();
    this.scene.borders.setCollider();
    this.scene.canons.setCollider();
    this.scene.walls.setCollider();
    // this.physics.collide(this.ship, this.borders);

    // MapGenerator.walls(scene);
  }

  // private static walls(scene: MainScene):void {
  //   let borders = [];
  //   borders.push(scene.physics.add.staticImage(scene.gridSize / 2, scene.gridSize / 2, 'wall'));
  //   borders.push(scene.physics.add.staticSprite(scene.width - scene.gridSize / 2, scene.gridSize / 2, 'wall'));
  //   borders.push(scene.physics.add.staticSprite(scene.gridSize / 2, scene.height - scene.gridSize / 2, 'wall'));
  //   borders.push(scene.physics.add.staticSprite(scene.width - scene.gridSize / 2, scene.height - scene.gridSize / 2, 'wall'));
  //   for (let i = 1; i < scene.gridsX - 1; i++) {
  //     borders.push(scene.physics.add.staticSprite((i * scene.gridSize) + (scene.gridSize / 2), scene.gridSize * 0.5, 'border'));
  //   }
  //   for (let i = 1; i < scene.gridsX - 1; i++) {
  //     borders.push(scene.physics.add.staticSprite((i * scene.gridSize) + (scene.gridSize / 2), scene.height - scene.gridSize * 0.5, 'border'));
  //   }
  //   for (let i = 1; i < scene.gridsY - 1; i++) {
  //     borders.push(scene.physics.add.staticSprite(scene.gridSize * 0.5, (i * scene.gridSize) + (scene.gridSize / 2), 'border').setAngle(90));
  //   }
  //   for (let i = 1; i < scene.gridsY - 1; i++) {
  //     borders.push(scene.physics.add.staticSprite(scene.width - scene.gridSize * 0.5, (i * scene.gridSize) + (scene.gridSize / 2), 'border').setAngle(90));
  //   }
  //
  //   for (let border of borders) {
  //     border.setSize(scene.gridSize, scene.gridSize);
  //     border.setScale(scene.gridSize / border.width);
  //   }
  //
  //   scene.borders = scene.physics.add.staticGroup(borders);
  // }

  private addBorder(mapField:MapField, row:number, column:number):void{
    const border = this.addStaticSprite(row, column, mapField.type);
    border.setSize(this.scene.gridSize, this.scene.gridSize);
    border.setScale(this.scene.gridSize / border.width);
    this.scene.borders.add(border);
    // borders.push(this.scene.physics.add.staticSprite(this.scene.width - this.scene.gridSize / 2, this.scene.gridSize / 2, 'wall'));
  }

  private addWall(mapField:MapField, row:number, column:number):void{
    console.log('adding wall');
    const wall = this.addStaticSprite(row, column, mapField.type);
    wall.setSize(this.scene.gridSize, this.scene.gridSize);
    wall.setScale(this.scene.gridSize / wall.width);
    this.scene.walls.add(wall);
    // borders.push(this.scene.physics.add.staticSprite(this.scene.width - this.scene.gridSize / 2, this.scene.gridSize / 2, 'wall'));
  }

  private addStar(mapField:MapField, row:number, column:number):void{
    const star = this.addSprite(row, column, mapField.type);
    star.setScale(this.scene.gridSize/star.width);
    this.scene.stars.add(star);
    this.scene.score.starSum++;
  }

  private addCanon(mapField:MapField, row:number, column:number):void{
    const canon:Sprite = this.addSprite(row, column, mapField.type);
    const canonSizeMod = this.scene.gridSize / canon.width;
    const sizeX = this.scene.gridsX*this.scene.gridSize*(1/canonSizeMod);
    const sizeY = this.scene.gridsY*this.scene.gridSize*(1/canonSizeMod);
    canon.setSize(sizeX*Math.abs(Canons.colliders.get(mapField.angle).X)+1*Math.abs(Canons.colliders.get(mapField.angle).Y),
      sizeY*Math.abs(Canons.colliders.get(mapField.angle).Y)+1*Math.abs(Canons.colliders.get(mapField.angle).X));
    canon.body.setOffset(canon.body.offset.x+(sizeX/2)*Canons.colliders.get(mapField.angle).X,
      canon.body.offset.y+(sizeY/2)*Canons.colliders.get(mapField.angle).Y);
    // canon.setSize((MapGenerator.scene.gridSize * canon.width / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).X)*MapGenerator.scene.width * canon.width / MapGenerator.scene.gridSize)
    //   , (MapGenerator.scene.gridSize * canon.height / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).Y)*MapGenerator.scene.height * canon.height / MapGenerator.scene.gridSize));
    // canon.setSize((MapGenerator.scene.gridSize * canon.width / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).X)*MapGenerator.scene.width * canon.width / MapGenerator.scene.gridSize)
    //   , (MapGenerator.scene.gridSize * canon.height / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).Y)*MapGenerator.scene.height * canon.height / MapGenerator.scene.gridSize));
    // canon.setDisplaySize(MapGenerator.scene.gridSize, MapGenerator.scene.gridSize);
    // canon.body.setSize(Canons.colliders.get(mapField.angle).X*MapGenerator.scene.gridsX*MapGenerator.scene.gridSize,
    //   Canons.colliders.get(mapField.angle).Y*MapGenerator.scene.gridsY*MapGenerator.scene.gridSize);
    // canon.body.setOffset(0,0);
    canon.setScale(canonSizeMod);
    canon.setAngle(mapField.angle);
    this.scene.canons.add(canon);
    canon.setBounce(1);
    canon.setVelocityX(Math.abs(Canons.colliders.get(mapField.angle).Y)*Canons.speed);
    canon.setVelocityY(Math.abs(Canons.colliders.get(mapField.angle).X)*Canons.speed);
    canon.setDepth(10);
  }

  private addSprite(row:number, column:number, type:string):Sprite{
    return this.scene.physics.add.sprite(row*this.scene.gridSize+this.scene.gridSize/2, column*this.scene.gridSize+this.scene.gridSize/2, type);
  }

  private addStaticSprite(row:number, column:number, type:string):Sprite{
    return this.scene.physics.add.staticSprite(row*this.scene.gridSize+this.scene.gridSize/2, column*this.scene.gridSize+this.scene.gridSize/2, type);
  }
}
