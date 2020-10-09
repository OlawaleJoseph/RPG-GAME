import Phaser from 'phaser';
import config from './config/config';
import BootScene from './scenes/Boot';
import PreloaderScene from './scenes/Preloader';
import TitleScene from './scenes/Title';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();