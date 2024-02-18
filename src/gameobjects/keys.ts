import type { Key as KaboomKey } from 'kaboom';

import { DirectionKey, Key, Sound, Tag } from '../constants';
import { getArea, getPosition, isDirectionKeyPressed } from '../helpers';
import { incrementScore } from './score';
import { addStar } from './star';

export function addKeys() {
  const keyObjects = addKeyObjects();

  Object.entries(keyObjects).forEach(([key, keyObject]) => {
    onCollideUpdate(key, Tag.direction, () => {
      if (isDirectionKeyPressed(key) || keyObject.isClicked()) {
        addStar();
        incrementScore();
      }
    });

    onMousePress('left', () => {
      if (keyObject.isClicked()) {
        handlePress(key as DirectionKey);
      }
    });

    onMouseRelease(() => {
      handleRelease(key as DirectionKey);
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
  const up = addKeyObject('up');
  const left = addKeyObject('left');
  const down = addKeyObject('down');
  const right = addKeyObject('right');

  return {
    up,
    left,
    down,
    right,
    w: up,
    a: left,
    s: down,
    d: right,
  } as const;
}

function addKeyObject(key: DirectionKey) {
  return add([
    sprite(Key[key]),
    getPosition(key),
    anchor('center'),
    getArea(),
    opacity(0.5),
    Tag[key],
  ]);
}
