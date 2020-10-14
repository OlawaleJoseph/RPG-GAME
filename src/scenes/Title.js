import Phaser from 'phaser';
import config from '../config/config';
import Button from '../components/Button';
import { button1, button2 } from '../utils/common';
import { getName } from '../utils/storage';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.model.name = getName();

    const averageScreenWidth = config.width / 2;
    const averageScreenHeight = config.height / 2;

    this.gameButton = new Button(this, averageScreenWidth, averageScreenHeight - 150, button1, button2, 'Play', 'Game');

    this.optionsButton = new Button(this, averageScreenWidth, averageScreenHeight - 50, button1, button2, 'Options', 'Options');

    this.creditsButton = new Button(this, averageScreenWidth, averageScreenHeight + 50, button1, button2, 'Credits', 'Credits');

    this.leaderBoardButton = new Button(this, averageScreenWidth, averageScreenHeight + 150, button1, button2, 'Rankings', 'Rankings');

    if (this.model.musicOn && !this.model.bgMusicPlaying) {
      this.bgMusic = this.sound.add('theme', { volume: 1, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2, config.height / 2 - offset * 100, config.width, config.height,
      ),
    );
  }
}
