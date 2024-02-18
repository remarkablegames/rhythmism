import { Scene, Sprite } from '../constants';
import { addButton } from '../gameobjects';
import { levels } from '../levels';

scene(Scene.start, () => {
  add([
    sprite(Sprite.background),
    pos(width() / 2, height() / 2),
    anchor('center'),
  ]);

  Object.keys(levels).forEach((levelId, index) => {
    addButton(levels[levelId].title, vec2(center().x, 100 * (index + 1)), () =>
      go(Scene.load, levelId),
    );
  });
});
