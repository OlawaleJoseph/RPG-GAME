import Phaser from 'phaser';
import config from '../config/config';

export default class RankingScene extends Phaser.Scene {
  constructor() {
    super('Rankings');
  }

  create() {
    const myText = this.add.text(0, 0, 'Score Rankings', { fontSize: '45px', fill: '#4BB543' });
    this.zone = this.add.zone(
      config.width / 2, config.height / 2 + 30, config.width, config.height,
    );

    Phaser.Display.Align.In.TopCenter(myText, this.zone);
  }
}