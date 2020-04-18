export class Score {

  public static readonly MAX_LIVES = 10;
  public static readonly SUCCESS_TEXT = 'You Win';
  public static readonly FAIL_TEXT = 'You Lose';

  private static readonly STAR_VALUE = 100;
  private static readonly SECOND_VALUE = 100;
  private static readonly LIFE_VALUE = 1000;

  public success = false;
  public collectedStars = 0;
  public starSum = 0;
  public lives = Score.MAX_LIVES;
  public time: number;

  public getScore():number{
    return this.collectedStars*Score.STAR_VALUE+this.lives*Score.LIFE_VALUE+((this.lives>0)?(30-this.time)*Score.SECOND_VALUE:0);
  }
}
