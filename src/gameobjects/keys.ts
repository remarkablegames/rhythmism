import type { AudioPlay } from 'kaboom';

import { DirectionKey, directions, Key, Sound, Tag } from '../constants';
import { getPosition } from '../helpers';
import { incrementScore } from './score';
import { addStar } from './star';

// const LONG_PRESS_MILLISECONDS = 500;

export function addKeys() {
  const keyMap = {
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

  let music: AudioPlay | undefined;

  (directions as DirectionKey[]).forEach((key) => {
    onCollideUpdate(key, Tag.direction, () => {
      if (isKeyPressed(key)) {
        addStar();
        incrementScore();
      }
    });

    const releaseMap: Record<string, number> = {};

    onKeyPress(key, () => {
      keyMap[key].opacity = 1;

      releaseMap[key] = Date.now();
      play(Sound.score, {
        volume: 0.5,
      });
    });

    // onKeyDown(key, () => {
    //   if (!music && Date.now() - releaseMap[key] > LONG_PRESS_MILLISECONDS) {
    //     music = play(Sound.longPress, {
    //       volume: 0.5,
    //     });
    //   }
    // });

    onKeyRelease(key, () => {
      keyMap[key].opacity = 0.5;

      if (music) {
        music.paused = true;
        music = undefined;
      }
    });
  });
}
