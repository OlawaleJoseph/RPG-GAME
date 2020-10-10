import Phaser from 'phaser';
import Button from '../components/Button';
import config from '../config/config';
import { button1, button2 } from '../utils/common';
import centerItem from '../utils/phaserHelper';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 100, 'Credits', { fontSize: '45px', fontWeight: 'bold', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'By: Adedeko Olawale', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    centerItem(this.creditsText, this.zone);

    centerItem(this.madeByText, this.zone);

    this.menuButton = new Button(this, 400, 500, button1, button2, 'Menu', 'Title');

    this.creditsText.setY(100);
    this.madeByText.setY(500);
  }
}