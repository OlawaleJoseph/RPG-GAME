import Phaser from 'phaser';

export default (child, container) => {
  Phaser.Display.Align.In.Center(
    child, container,
  );
};

export const generateRandomNumberInRange = (min, max) => Phaser.Math.RND.between(min, max);