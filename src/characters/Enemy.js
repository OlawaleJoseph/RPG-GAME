/* eslint-disable no-useless-constructor */
import Base from './Entity';

export default class Dragon extends Base {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
  }
}
