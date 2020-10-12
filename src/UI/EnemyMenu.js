/* eslint-disable no-useless-constructor */
import Menu from './Menu';

export default class EnemyMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
  }

  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}