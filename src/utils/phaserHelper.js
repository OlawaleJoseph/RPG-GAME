import Phaser from 'phaser';

export default (child, container) => {
  Phaser.Display.Align.In.Center(
    child, container,
  );
};