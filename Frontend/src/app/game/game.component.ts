// @ts-ignore
import Phaser from 'phaser';
import {MainScene} from "../gameLogic/MainScene";
import {Component, NgZone, OnInit} from "@angular/core";
import {InitScene} from "../gameLogic/InitScene";
import {PauseScene} from "../gameLogic/PauseScene";
import {ResultsScene} from "../gameLogic/ResultsScene";
import {Constants} from "../gameLogic/data/Constants";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [MainScene, PauseScene, InitScene, ResultsScene]
})
export class GameComponent implements OnInit {

  private phaserGame: Phaser.Game;
  private config: Phaser.Types.Core.GameConfig;

  constructor(private _ngZone: NgZone, private mainScene: MainScene, private initScene: InitScene,
              private pauseScene: PauseScene, private resultsScene: ResultsScene) {
    this._ngZone.runOutsideAngular(() => {
      this.config = {
        type: Phaser.AUTO,
        scale: {
          parent: 'canvas-wrapper',
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: Constants.WIDTH+200,
          height: Constants.HEIGHT,
        },
        scene: [ initScene, mainScene, pauseScene, resultsScene],
        physics: {
          default: 'arcade',
          arcade: {
            // debug: true,
            gravity: { y: 0 }
          }
        }
      };
    });
  }  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      this.phaserGame = new Phaser.Game(this.config);
    });
  }
}
