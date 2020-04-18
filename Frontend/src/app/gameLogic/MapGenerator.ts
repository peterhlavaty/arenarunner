import {MainScene} from "./MainScene";
import {TextureName} from "../enums/TextureName";
import {MapField} from "../mapFields/MapField";
import Sprite = Phaser.Physics.Arcade.Sprite;
import {Canons} from "../mapFields/Canons";

export class MapGenerator {

  private static typemap = new Map([
    [TextureName.BORDER, MapGenerator.addBorder],
    [TextureName.WALL, MapGenerator.addWall],
    [TextureName.EMPTY, ()=>{}],
    [TextureName.STAR, MapGenerator.addStar],
    [TextureName.CANON, MapGenerator.addCanon],
  ]);

  private static scene;

  public static generate(scene: MainScene):void{

    console.log('generate');
    MapGenerator.scene = scene;
    scene.map.forEach((row, rowIndex)=>{
      row.forEach((column, columnIndex)=>{
        column.forEach((mapField, index)=>{
          MapGenerator.typemap.get(mapField.type)(mapField, rowIndex, columnIndex);
        })
      })
    });
    //add colliders
    scene.stars.setCollider();
    // this.borders.refresh();
    scene.borders.setCollider();
    scene.canons.setCollider();
    scene.walls.setCollider();
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

  private static addBorder(mapField:MapField, row:number, column:number):void{
    const border = MapGenerator.addStaticSprite(row, column, mapField.type);
    border.setSize(MapGenerator.scene.gridSize, MapGenerator.scene.gridSize);
    border.setScale(MapGenerator.scene.gridSize / border.width);
    MapGenerator.scene.borders.add(border);
    // borders.push(this.scene.physics.add.staticSprite(this.scene.width - this.scene.gridSize / 2, this.scene.gridSize / 2, 'wall'));
  }

  private static addWall(mapField:MapField, row:number, column:number):void{
    const wall = MapGenerator.addStaticSprite(row, column, mapField.type);
    wall.setSize(MapGenerator.scene.gridSize, MapGenerator.scene.gridSize);
    wall.setScale(MapGenerator.scene.gridSize / wall.width);
    MapGenerator.scene.walls.add(wall);
    // borders.push(this.scene.physics.add.staticSprite(this.scene.width - this.scene.gridSize / 2, this.scene.gridSize / 2, 'wall'));
  }

  private static addStar(mapField:MapField, row:number, column:number):void{
    const star = MapGenerator.addSprite(row, column, mapField.type);
    star.setScale(MapGenerator.scene.gridSize/star.width);
    MapGenerator.scene.stars.add(star);
    MapGenerator.scene.score.starSum++;
  }

  private static addCanon(mapField:MapField, row:number, column:number):void{
    const canon:Sprite = MapGenerator.addSprite(row, column, mapField.type);
    const canonSizeMod = MapGenerator.scene.gridSize / canon.width;
    const sizeX = MapGenerator.scene.gridsX*MapGenerator.scene.gridSize*(1/canonSizeMod);
    const sizeY = MapGenerator.scene.gridsY*MapGenerator.scene.gridSize*(1/canonSizeMod);
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
    MapGenerator.scene.canons.add(canon);
    canon.setBounce(1);
    canon.setVelocityX(Math.abs(Canons.colliders.get(mapField.angle).Y)*Canons.speed);
    canon.setVelocityY(Math.abs(Canons.colliders.get(mapField.angle).X)*Canons.speed);
    canon.setDepth(10);
  }

  private static addSprite(row:number, column:number, type:string):Sprite{
    return MapGenerator.scene.physics.add.sprite(row*MapGenerator.scene.gridSize+MapGenerator.scene.gridSize/2, column*MapGenerator.scene.gridSize+MapGenerator.scene.gridSize/2, type);
  }

  private static addStaticSprite(row:number, column:number, type:string):Sprite{
    return MapGenerator.scene.physics.add.staticSprite(row*MapGenerator.scene.gridSize+MapGenerator.scene.gridSize/2, column*MapGenerator.scene.gridSize+MapGenerator.scene.gridSize/2, type);
  }
}
