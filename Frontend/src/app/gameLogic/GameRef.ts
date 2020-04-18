import Game = Phaser.Game;

export class GameRef {
  private static gameRef: GameRef = null;
  public game:Game;
  private constructor(){}
  public static getInstance():GameRef{
    if(this.gameRef==null){
      this.gameRef = new GameRef();
    }
    return this.gameRef;
  }
}
