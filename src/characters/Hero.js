import Base from './Entity';

export default class Player extends Base {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);

    this.flipX = true;

    this.setScale(2);
  }
}