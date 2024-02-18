import type { GameObj, ScaleComp } from 'kaboom';

import { Sprite } from '../constants';

export function addStar(position = center()) {
  const kaboom = add([pos(position), stay()]);

  const speed = 1 * 5;
  const size = 1;

  const ka = kaboom.add([
    sprite(Sprite.star),
    scale(0),
    anchor('center'),
    timer(),
    opacity(0.5),
  ]);

  ka.wait(0.4 / speed, () => ka.use(boom(speed, size)));
  ka.onDestroy(() => kaboom.destroy());

  return kaboom;
}

function boom(speed: number = 2, size: number = 1) {
  let time = 0;

  return {
    require: ['scale'],
    update(this: GameObj<ScaleComp>) {
      const s = Math.sin(time * speed) * size;
      if (s < 0) {
        this.destroy();
      }
      this.scale = vec2(s);
      time += dt();
    },
  };
}
