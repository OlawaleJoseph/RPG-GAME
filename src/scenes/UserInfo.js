/* eslint-disable no-alert */
import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('UserInfo');
  }

  create() {
    this.name = prompt('Enter you name');
    if (!this.name) {
      this.name = 'ANONYMOUS';
    }
    this.model = this.sys.game.globals.model;
    this.model.name = this.name.toUpperCase();
    this.scene.start('Title');
  }
}