import type { GameObj, TextComp } from 'kaboom';

let score: GameObj<TextComp>;

export function addScore() {
  score = add([
    text('0', { size: 32 }),
    pos(center().x, 5),
    color(255, 255, 255),
  ]);
}

export function incrementScore(increment = 1) {
  score.text = String(parseInt(score.text) + increment);
}
