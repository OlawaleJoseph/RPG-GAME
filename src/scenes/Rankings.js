import Phaser from 'phaser';
import Button from '../components/Button';
import config from '../config/config';
import { button1, button2 } from '../utils/common';

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

    this.menuButton = new Button(this, 400, 500, button1, button2, 'Menu', 'Title');
  }
}