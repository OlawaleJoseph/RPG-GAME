import Phaser from 'phaser';

export default (text, container) => {
  Phaser.Display.Align.In.Center(
    text, container,
  );
};