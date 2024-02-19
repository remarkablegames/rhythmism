import type { AudioPlay, GameObj, TimerComp, TweenController } from 'kaboom';

import { Scene } from '../constants';
import { addButton } from './button';

export function addPause(game: GameObj<TimerComp>, music: AudioPlay) {
  let curTween: TweenController;

  onKeyPress((key) => {
    if (['escape', 'p'].includes(key)) {
      togglePause();
    }
  });

  const pauseMenu = add([
    rect(340, 300),
    color(255, 255, 255),
    outline(4),
    anchor('center'),
    pos(center().add(0, 700)),
  ]);
  pauseMenu.hidden = true;

  addButton(pauseMenu, 'Resume', vec2(0, -50), togglePause);
  addButton(pauseMenu, 'Exit', vec2(0, 50), () => go(Scene.start));

  function togglePause() {
    music.paused = !music.paused;
    game.paused = !game.paused;

    if (curTween) {
      curTween.cancel();
    }

    curTween = tween(
      pauseMenu.pos,
      game.paused ? center() : center().add(0, 700),
      1,
      (p) => (pauseMenu.pos = p),
      easings.easeOutElastic,
    );

    if (game.paused) {
      pauseMenu.hidden = false;
    } else {
      curTween.onEnd(() => {
        pauseMenu.hidden = true;
      });
    }
  }
}
