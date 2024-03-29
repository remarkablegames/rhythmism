import { Direction, Key, Scene, Sound, Sprite } from '../constants';

scene(Scene.preload, () => {
  loadSprite(Sprite.background, 'sprites/background/guitar-city.png');
  loadSprite(Sprite.star, 'sprites/star.png');

  Object.values(Direction).forEach((direction) => {
    loadSprite(direction, `sprites/${direction}.png`);
  });

  Object.values(Key).forEach((key) => {
    loadSprite(key, `sprites/${key}.png`);
  });

  loadSound(Sound.score, 'sounds/score.mp3');

  go(Scene.start);
});
