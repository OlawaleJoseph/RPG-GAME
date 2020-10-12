import Phaser from 'phaser';
import Player from '../characters/Hero';
import Troll from '../characters/Enemy';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('Battle');
  }

  create() {
    // change the background to green
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    // player character - warrior
    const warrior = new Player(this, 450, 200, 'hero', 4, 'Hero', 100, 20);
    warrior.scale = 3;
    warrior.flipX = true;
    this.add.existing(warrior);

    const enemy = new Troll(this, 50, 200, 'troll', null, 'Dragon', 50, 3);
    enemy.scale = 2;
    this.add.existing(enemy);
  }
}