import Phaser from 'phaser';
// import Dragon from '../assets/dragon.png';
// import Player from '../assets/RPG_assets.png';
// import ActionsMenu from './ActionMenu';
// import EnemiesMenu from './EnemyMenu';
// import HeroesMenu from './HeroesMenu';
// import Message from './Message';

export default class UIScene extends Phaser.Scene {
  constructor() {
    super('BattleMenu');
  }

  create() {
    const { height, width } = this.cameras.main;
    const rectX = (width / 2);
    // draw some background for the menu
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);
    this.graphics.strokeRect(rectX - 90, height - 100, 90, 100);
    this.graphics.fillRect(rectX - 90, height - 100, 90, 100);
    this.graphics.strokeRect(rectX, height - 100, 90, 100);
    this.graphics.fillRect(rectX, height - 100, 90, 100);
    this.graphics.strokeRect(rectX + 90, height - 100, 130, 100);
    this.graphics.fillRect(rectX + 90, height - 100, 130, 100);
  }
}