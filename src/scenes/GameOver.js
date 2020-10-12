/* eslint-disable no-new */
import Phaser from 'phaser';
import Button from '../components/Button';
import { button1, button2 } from '../utils/common';
import { postHighScore } from '../utils/fetchData';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init() {
    this.model = this.sys.game.globals.model;
  }

  create() {
    this.add.text(400, 100, 'Game Over', {
      color: 'white',
      fontSize: '32px ',
      fontFamily: 'Georgia',
    }).setOrigin(0.5, 0.5);

    this.add.text(400, 200, `Score: ${this.sys.game.globals.model.score}`, {
      color: 'white',
      fontSize: '32px ',
    }).setOrigin(0.5, 0.5);

    postHighScore(this.model.name, this.model.score);

    new Button(this, 200, 300, button1, button2, 'Restart', 'Game');
    new Button(this, 600, 300, button1, button2, 'Menu', 'Title');
  }
}
