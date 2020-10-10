import Phaser from 'phaser';
import config from '../config/config';
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

    this.creditsText.setY(100);
    this.madeByText.setY(500);
  }
}