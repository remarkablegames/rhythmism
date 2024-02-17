import { Direction, Key, Scene, Sound } from '../constants';

scene(Scene.preload, () => {
  Object.values(Direction).forEach((direction) => {
    loadSprite(direction, `sprites/${direction}.png`);
  });

  Object.values(Key).forEach((key) => {
    loadSprite(key, `sprites/${key}.png`);
  });

  loadSound(Sound.score, 'sounds/score.mp3');
  loadSound(Sound.longPress, 'sounds/longPress.mp3');

  go(Scene.start);
});
