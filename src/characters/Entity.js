import Phaser from 'phaser';

export default class Base extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame);

    this.type = type;
    this.hp = hp;
    this.maxHp = this.hp;
    this.damage = damage;
    this.living = true;
    this.menuItem = null;
  }

  attack(target) {
    if (target.living) {
      target.takeDamage(this.damage);
      this.scene.events.emit('Message', `${this.type} attacks ${target.type} for ${this.damage} damage`);
    }
  }

  setMenuItem(item) {
    this.menuItem = item;
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      this.menuItem.unitKilled();
      this.living = false;
      this.visible = false;
      this.menuItem = null;
    }
  }
}
