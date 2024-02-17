import { Scene } from '../constants';
import { addButton } from '../gameobjects';
import { levels } from '../levels';

scene(Scene.start, () => {
  Object.keys(levels).forEach((levelId, index) => {
    addButton(levels[levelId].title, vec2(center().x, 100 * (index + 1)), () =>
      go(Scene.load, levelId),
    );
  });
});
