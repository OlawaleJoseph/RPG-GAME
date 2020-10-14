import Phaser from 'phaser';

export default class MenuItem extends Phaser.GameObjects.Text {
  constructor(x, y, text, scene) {
    super(scene, x, y, text, { color: '#ffffff', align: 'center', fontSize: 20 });
  }

  select() {
    this.setColor('#f8ff38');
  }

  deselect() {
    this.setColor('#ffffff');
  }

  unitKilled() {
    this.active = false;
    this.visible = false;
  }
}
