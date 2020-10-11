import Phaser from 'phaser';
// import Button from '../components/Button';
// import config from '../config/config';
// import { button1, button2 } from '../utils/common';
// import centerItem from '../utils/phaserHelper';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tiles = map.addTilesetImage('spritesheet', 'tiles');

    const grass = map.createStaticLayer('Grass', tiles, 0, 0);

    grass.scale = 2;

    const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);

    obstacles.setCollisionByExclusion([-1]);
  }
}