import { Scene, Sound, Sprite } from '../constants';
import { loadSounds } from '../helpers';
import { levels } from '../levels';

scene(Scene.load, async (levelId: string) => {
  add([text('Loading...'), anchor('center'), pos(center()), color(0, 0, 0)]);

  const level = levels[levelId];

  await Promise.all([
    loadSounds(Sound.music, level.music),
    loadSprite(Sprite.background, level.background),
  ]);

  go(Scene.game, levelId);
});
