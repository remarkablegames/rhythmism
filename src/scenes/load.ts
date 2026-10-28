import { Scene, Sound, Sprite } from '../constants';
import { loadSounds } from '../helpers';
import { levels } from '../levels';

scene(Scene.load, (levelId: string) => {
  add([text('Loading...'), anchor('center'), pos(center()), color(BLACK)]);

  const level = levels[levelId];

  void Promise.all([
    loadSounds(Sound.music, level.music),
    loadSprite(Sprite.background, level.background),
  ]).then(() => {
    go(Scene.game, levelId);
  });
});
