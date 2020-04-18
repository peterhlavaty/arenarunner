import Phaser from "phaser";
import {Input} from "./Input";
import TileSprite = Phaser.GameObjects.TileSprite;
import TimerEvent = Phaser.Time.TimerEvent;
import Text = Phaser.GameObjects.Text;
import {Score} from "./Score";
import {MapGenerator} from "./MapGenerator";
import {HostListener, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import Scene = Phaser.Scene;
import {MapField} from "../mapFields/MapField";
import Sprite = Phaser.Physics.Arcade.Sprite;
import {TextureName} from "../enums/TextureName";
import {Stars} from "../mapFields/Stars";
import {Borders} from "../mapFields/Borders";
import {Canons} from "../mapFields/Canons";
import {Walls} from "../mapFields/Walls";
import {Bullets} from "../mapFields/Bullets";
import {SceneName} from "../enums/SceneName";
import {Result} from "./data/Result";

@Injectable({
  providedIn: "root"
})
export class MainScene extends Scene {

  public windowWidth:number;
  public windowHeight:number;
  public gridSize = 50;
  public width = 800;
  public height = 600;
  public gridsX = this.width/this.gridSize;
  public gridsY = this.height/this.gridSize;
  private ts: TileSprite;
  private myInput: Input;
  private timer: TimerEvent;
  private timerText: Text;
  private timerTime = 0;


  public map: MapField[][][];

  public score = new Score();
  public scoreText: Text;
  public livesText: Text;
  public ship: Sprite;
  public borders: Borders;
  public walls: Walls;
  public stars: Stars;
  public canons: Canons;
  public bullets: Bullets;


  public constructor(private http: HttpClient) {
    super({ key: SceneName.MAIN });
    this.onResize();
    this.http.get("www.random.sk");
  }

  init(map:MapField[][][]){
    this.map = map;
    this.gridsX = this.map.length;
    this.gridsY = this.map[0].length;
    this.gridSize = this.height/this.gridsY;
  }

  create() {
    console.log('create method');

    //background
    this.ts = this.add.tileSprite(this.gridSize, this.gridSize, (this.gridsX-1)*this.gridSize, (this.gridsY-1)*this.gridSize, 'back').setOrigin(0.001);
    //ship (player)
    this.ship = this.physics.add.sprite(this.width/3, this.height/3, TextureName.SHIP);
    this.ship.setScale(this.gridSize/this.ship.width);
    //texts
    //score
    this.scoreText = this.add.text(this.width+this.gridSize, this.height/2-this.gridSize, 'Stars: ');
    //time
    this.timerText = this.add.text(this.width+this.gridSize, this.height/2, 'Time: ' + this.timerTime);
    this.timer = this.time.addEvent({ delay: 1000, callback: this.incrementTimer, callbackScope: this, repeat: Infinity });
    //lives
    this.livesText = this.add.text(this.width+this.gridSize, this.height/2+this.gridSize, 'Lives: ' + this.score.lives);

    //game objects
    this.stars = new Stars(this);
    this.borders = new Borders(this);
    this.canons = new Canons(this);
    this.walls = new Walls(this);
    this.bullets = new Bullets(this);

    //generate map
    MapGenerator.generate(this);

    // this.borders = this.physics.add.staticGroup({
    //   key: 'border',
    //   frameQuantity: 30
    // });
    //
    // Phaser.Actions.PlaceOnRectangle(this.borders.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));
    // this.borders = this.physics.add.group(borders);

    // let stars = [];
    // for(let i = 1; i<this.gridsX; i++){
    //   for(let j = 1; j<this.gridsY; j++){
    //     let star = this.physics.add.sprite(i*this.gridSize, j*this.gridSize, 'star');
    //     star.setScale(this.gridSize/star.width);
    //     stars.push(star);
    //   }
    // }
    // this.stars = this.physics.add.group(stars);
    // this.score.starSum = (this.gridsX-1)*(this.gridsY-1);

    this.myInput = new Input(this.ship, this);
    // console.log(this.myInput.test());
    this.myInput.defineKeys();

    this.scene.pause();
    this.scene.launch(SceneName.PAUSE);
    this.scene.bringToTop(SceneName.PAUSE)
    // this.scene.pause();
  }

  preload() {
    console.log('preload method');
    this.load.spritesheet('back', 'assets/BackgroundTile.png', { frameWidth: this.gridSize, frameHeight: this.gridSize });
    this.load.image(TextureName.SHIP, 'assets/Ship.png');
    this.load.image(TextureName.STAR, 'assets/Star.png');
    this.load.image(TextureName.CANON, 'assets/Canon.png');
    this.load.image(TextureName.BORDER, 'assets/Border.png');
    this.load.image(TextureName.WALL, 'assets/Wall.png');
    this.load.image(TextureName.BULLET, 'assets/Bullet.png');
  }  update() {
    this.myInput.move();
  }

  public endGame(success: boolean):void{
    this.score.success = success;
    this.score.time = this.timerTime;
    this.scene.start(SceneName.RESULTS, new Result(this.map, this.score));
  }

  public loseLife(){
    this.score.lives--;
    this.livesText.setText('Lives: ' + this.score.lives);
  }

  private incrementTimer(){
    this.timerTime++;
    this.timerText.setText('Time: ' + this.timerTime);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    // this.windowHeight = window.innerHeight;
    // this.windowWidth = window.innerWidth;
    // this.width = (Math.floor(this.windowWidth/this.gridSize))*this.gridSize;
    // this.height = (Math.floor(this.windowHeight/this.gridSize))*this.gridSize;
    // this.gridsX = this.width/this.gridSize;
    // this.gridsY = this.height/this.gridSize;
  }
}
