import Phaser from 'phaser';
import Player from '../characters/Hero';
import Troll from '../characters/Enemy';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('Battle');
  }

  create() {
    this.cameras.main.setBackgroundColor('rgba(34,139,34)');

    this.startBattle();

    this.sys.events.on('wake', this.startBattle, this);
  }

  startBattle() {
    const warrior = new Player(this, 450, 200, 'hero', 4, 'Hero', 100, 20);
    warrior.scale = 3;
    warrior.flipX = true;
    this.add.existing(warrior);

    const troll = new Troll(this, 50, 200, 'troll', null, 'Troll', 50, 3);
    troll.scale = 2;
    this.add.existing(troll);

    this.heroes = [warrior];

    this.enemies = [troll];

    this.units = this.heroes.concat(this.enemies);

    this.index = -1;
    this.scene.launch('BattleMenu');
  }

  endBattle() {
    this.heroes.length = 0;
    this.enemies.length = 0;
    for (let i = 0; i < this.units.length; i += 1) {
      this.units[i].destroy();
    }
    this.units.length = 0;
    this.index = -1;
    this.scene.sleep('BattleMenu');
    this.scene.switch('Game');
  }

  receivePlayerSelection(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
    }
    this.time.addEvent({ delay: 1000, callback: this.nextTurn, callbackScope: this });
  }

  exitBattle() {
    this.scene.sleep('BattleMenu');
    this.scene.switch('Game');
  }

  checkEndBattle() {
    let victory = true;
    for (let i = 0; i < this.enemies.length; i += 1) {
      if (this.enemies[i].living) victory = false;
    }
    let gameOver = true;
    for (let i = 0; i < this.heroes.length; i += 1) {
      if (this.heroes[i].living) gameOver = false;
    }

    if (victory) {
      return 'victory';
    }
    if (gameOver) {
      return 'gameOver';
    }
    return victory || gameOver;
  }

  nextTurn() {
    if (this.checkEndBattle()) {
      this.endBattle();
      return;
    }
    do {
      this.index += 1;

      if (this.index >= this.units.length) {
        this.index = 0;
      }
    } while (!this.units[this.index].living);
    if (this.units[this.index] instanceof Player) {
      this.events.emit('PlayerSelect', this.index);
    } else {
      let r;
      do {
        r = Math.floor(Math.random() * this.heroes.length);
      } while (!this.heroes[r].living);
      this.units[this.index].attack(this.heroes[r]);

      this.time.addEvent({ delay: 2000, callback: this.nextTurn, callbackScope: this });
    }
  }
}