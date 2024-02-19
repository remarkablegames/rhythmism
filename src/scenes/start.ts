import { Scene, Sprite } from '../constants';
import { addButton } from '../gameobjects';
import { levels } from '../levels';

scene(Scene.start, () => {
  const background = add([
    sprite(Sprite.background),
    pos(width() / 2, height() / 2),
    anchor('center'),
  ]);

  let buttonY = -50;

  Object.entries(levels).forEach(([levelId, level]) => {
    addButton(background, level.title, vec2(0, buttonY), () =>
      go(Scene.load, levelId),
    );

    buttonY += 100;
  });
});
