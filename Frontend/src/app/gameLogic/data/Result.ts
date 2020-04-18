import {Score} from "../Score";

export class Result {
  public map;
  public score: Score;

  constructor(map, score: Score) {
    this.map = map;
    this.score = score;
  }
}
