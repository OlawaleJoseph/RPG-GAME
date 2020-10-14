import Phaser from 'phaser';
import { generateRandomNumberInRange } from '../utils/phaserHelper';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tiles = map.addTilesetImage('spritesheet', 'tiles');

    const grass = map.createStaticLayer('Grass', tiles, 0, 0);

    grass.scale = 2;

    const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);

    obstacles.setCollisionByExclusion([-1]);

    this.player = this.physics.add.sprite(20, 100, 'hero', 20);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
    this.cameras.main.zoom = 2;

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { frames: [4, 5, 6, 7] }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { frames: [4, 5, 6, 7] }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('hero', { frames: [12, 13, 14, 15] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('hero', { frames: [20, 21, 22, 23] }),
      frameRate: 10,
      repeat: -1,
    });

    this.chests = this.physics.add.group();
    for (let i = 0; i < 30; i += 1) {
      const x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      const y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
      this.chests.create(x, y, 'closed_chest', 0, true);
    }
    this.physics.add.collider(this.player, obstacles);
    this.physics.add.overlap(this.player, this.chests, this.onMeetEnemy, false, this);
    this.sys.events.on('wake', this.wake, this);
  }

  onMeetEnemy(player, chest) {
    chest.x = generateRandomNumberInRange(0, this.physics.world.bounds.width);
    chest.y = generateRandomNumberInRange(0, this.physics.world.bounds.height);
    this.scene.switch('Battle');
  }

  wake() {
    this.cursors.left.reset();
    this.cursors.right.reset();
    this.cursors.up.reset();
    this.cursors.down.reset();
  }

  update() {
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.flipX = true;
      this.player.body.setVelocityX(-80);
    } else if (this.cursors.right.isDown) {
      this.player.flipX = false;
      this.player.body.setVelocityX(80);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
    }

    if (this.cursors.left.isDown) {
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }
  }
}