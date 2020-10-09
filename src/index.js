import Phaser from 'phaser';
import config from './config/config';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/Preloader';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();