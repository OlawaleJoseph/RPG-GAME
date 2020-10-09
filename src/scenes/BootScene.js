import Phaser from 'phaser';
import Logo from '../assets/images/logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', Logo);
  }

  create() {
    this.scene.start('Preloader');
  }
}