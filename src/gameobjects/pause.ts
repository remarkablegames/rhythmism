import type { AudioPlay, GameObj, TimerComp, TweenController } from 'kaboom';

export function addPause(game: GameObj<TimerComp>, music: AudioPlay) {
  let curTween: TweenController;

  onKeyPress((key) => {
    if (!['escape', 'p'].includes(key)) {
      return;
    }

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
  });

  const pauseMenu = add([
    rect(300, 400),
    color(255, 255, 255),
    outline(4),
    anchor('center'),
    pos(center().add(0, 700)),
  ]);

  pauseMenu.hidden = true;

  pauseMenu.add([
    text('Paused', {
      size: 36,
    }),
    color(0, 0, 0),
    center(),
    anchor('center'),
  ]);
}
