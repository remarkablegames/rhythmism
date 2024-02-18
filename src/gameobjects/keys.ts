import type { Key as KaboomKey } from 'kaboom';

import { DirectionKey, Key, Sound, Tag } from '../constants';
import { getPosition } from '../helpers';
import { incrementScore } from './score';
import { addStar } from './star';

export function addKeys() {
  const keyObjects = addKeyObjects();

  Object.entries(keyObjects).forEach(([key, keyObject]) => {
    onCollideUpdate(key, Tag.direction, () => {
      if (isKeyPressed(key as DirectionKey) || keyObject.isClicked()) {
        addStar();
        incrementScore();
      }
    });
  });

  onKeyPress(handlePress);
  onKeyRelease(handleRelease);

  function handlePress(key: KaboomKey) {
    const keyObject = keyObjects[key as keyof typeof keyObjects];
    if (!keyObject) {
      return;
    }
    keyObject.opacity = 1;
    play(Sound.score, {
      volume: 0.5,
    });
  }

  function handleRelease(key: KaboomKey) {
    const keyObject = keyObjects[key as keyof typeof keyObjects];
    if (!keyObject) {
      return;
    }
    keyObject.opacity = 0.5;
  }
}

function addKeyObjects() {
  return {
    left: add([
      sprite(Key.left),
      getPosition('left'),
      anchor('center'),
      area(),
      opacity(0.5),
      Tag.left,
    ]),

    down: add([
      sprite(Key.down),
      getPosition('down'),
      anchor('center'),
      area(),
      opacity(0.5),
      Tag.down,
    ]),

    up: add([
      sprite(Key.up),
      getPosition('up'),
      anchor('center'),
      area(),
      opacity(0.5),
      Tag.up,
    ]),

    right: add([
      sprite(Key.right),
      getPosition('right'),
      anchor('center'),
      area(),
      opacity(0.5),
      Tag.right,
    ]),
  };
}
