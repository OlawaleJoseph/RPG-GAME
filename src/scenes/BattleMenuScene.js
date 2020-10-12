import Phaser from 'phaser';
import ActionMenu from '../UI/ActionsMenu';
import EnemyMenu from '../UI/EnemyMenu';
import HeroMenu from '../UI/HeroesMenu';
import Message from '../UI/Message';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleMenu');
  }

  create() {
    const { height, width } = this.cameras.main;
    const rectX = (width / 2);

    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);
    this.graphics.strokeRect(rectX - 90, height - 100, 90, 100);
    this.graphics.fillRect(rectX - 90, height - 100, 90, 100);
    this.graphics.strokeRect(rectX, height - 100, 90, 100);
    this.graphics.fillRect(rectX, height - 100, 90, 100);
    this.graphics.strokeRect(rectX + 90, height - 100, 130, 100);
    this.graphics.fillRect(rectX + 90, height - 100, 130, 100);

    this.menus = this.add.container();

    this.heroesMenu = new HeroMenu(195, 153, this);
    this.actionsMenu = new ActionMenu(100, 153, this);
    this.enemiesMenu = new EnemyMenu(8, 153, this);

    this.currentMenu = this.actionsMenu;

    this.menus.add(this.heroesMenu);
    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);

    this.battleScene = this.scene.get('Battle');

    this.input.keyboard.on('keydown', this.onKeyInput, this);

    this.battleScene.events.on('PlayerSelect', this.onPlayerSelect, this);

    this.events.on('SelectEnemy', this.onSelectEnemy, this);

    this.events.on('Enemy', this.onEnemy, this);

    this.sys.events.on('wake', this.createMenu, this);

    this.message = new Message(this, this.battleScene.events);
    this.add.existing(this.message);

    this.createMenu();
  }

  createMenu() {
    this.remapHeroes();
    this.remapEnemies();
    this.battleScene.nextTurn();
  }

  onSelectEnemy() {
    this.currentMenu = this.enemiesMenu;
    this.enemiesMenu.select(0);
  }

  onEnemy(index) {
    this.heroesMenu.deselect();
    this.actionsMenu.deselect();
    this.enemiesMenu.deselect();
    this.currentMenu = null;
    this.battleScene.receivePlayerSelection('attack', index);
  }

  onSelectEnemies() {
    this.currentMenu = this.enemiesMenu;
    this.enemiesMenu.select(0);
  }

  onPlayerSelect(id) {
    this.heroesMenu.select(id);
    this.actionsMenu.select(0);
    this.currentMenu = this.actionsMenu;
  }

  onKeyInput(event) {
    if (this.currentMenu && this.currentMenu.selected) {
      if (event.code === 'ArrowUp') {
        this.currentMenu.moveSelectionUp();
      } else if (event.code === 'ArrowDown') {
        this.currentMenu.moveSelectionDown();
      } else if (event.code === 'ArrowRight' || event.code === 'Shift') {
        console.log('ON KEY INPUT BATTLE MENU');
        // CHECK HERE !!!!!!!!!!!!!
        this.currentMenu.select();
      } else if (event.code === 'Space' || event.code === 'ArrowLeft') {
        this.currentMenu.confirm();
      }
    }
  }

  remapHeroes() {
    const { heroes } = this.battleScene;
    this.heroesMenu.remap(heroes);
  }

  remapEnemies() {
    const { enemies } = this.battleScene;
    this.enemiesMenu.remap(enemies);
  }
}