import Phaser from 'phaser';
import Button from '../components/Button';
import config from '../config/config';
import { button1, button2, sortDescOrder } from '../utils/common';
import { getHighScores } from '../utils/fetchData';

export default class RankingScene extends Phaser.Scene {
  constructor() {
    super('Rankings');
  }

  async create() {
    const myText = this.add.text(0, 0, 'Top 5 Scores', { fontSize: '45px', fill: '#4BB543' });
    this.zone = this.add.zone(
      config.width / 2, config.height / 2 + 30, config.width, config.height,
    );

    Phaser.Display.Align.In.TopCenter(myText, this.zone);
    let results = await getHighScores();
    results = sortDescOrder(results).slice(0, 4);
    let y = 100;
    results.forEach((result, index) => {
      const text = `${index + 1}. ${result.user}     ${result.score}`;
      this.add.text(250, y, text, { fontSize: '30px', fill: '#ffffff' });
      y += 50;
    });

    this.menuButton = new Button(this, 400, 500, button1, button2, 'Menu', 'Title');
  }
}