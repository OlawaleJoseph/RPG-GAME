import Phaser from 'phaser';
import config from '../config/config';
import Button from '../components/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const averageScreenWidth = config.width / 2;
    const averageScreenHeight = config.height / 2;
    const button1 = 'button';
    const button2 = 'button_hover';

    this.gameButton = new Button(this, averageScreenWidth, averageScreenHeight - 150, button1, button2, 'Play', 'Game');

    this.optionsButton = new Button(this, averageScreenWidth, averageScreenHeight - 50, button1, button2, 'Options', 'Options');

    this.creditsButton = new Button(this, averageScreenWidth, averageScreenHeight + 50, button1, button2, 'Credits', 'Credits');

    this.leaderBoardButton = new Button(this, averageScreenWidth, averageScreenHeight + 150, button1, button2, 'Rankings', 'Rankings');

    this.model = this.sys.game.globals.model;
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
