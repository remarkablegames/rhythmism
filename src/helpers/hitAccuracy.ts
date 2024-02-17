import type { Vec2 } from 'kaboom';

import { accuracyRadii } from '../constants';

type HitAccuracy = 'Perfect!' | 'Excellent!' | 'Good!' | 'Miss!';

export function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function evaluateHit(distance: number): HitAccuracy {
  if (distance <= accuracyRadii.perfect) {
    return 'Perfect!';
  } else if (distance <= accuracyRadii.excellent) {
    return 'Excellent!';
  } else if (distance <= accuracyRadii.good) {
    return 'Good!';
  } else {
    return 'Miss!';
  }
}

export function showAccuracy(result: HitAccuracy, position: Vec2): void {
  let textColor;

  switch (result) {
    case 'Perfect!':
      textColor = color(rgb(255, 215, 0));
      break;
    case 'Excellent!':
      textColor = color(rgb(0, 191, 255));
      break;
    case 'Good!':
      textColor = color(rgb(50, 205, 50));
      break;
    case 'Miss!':
      textColor = color(rgb(255, 0, 0));
      break;
    default:
      textColor = color(rgb(255, 255, 255));
  }

  add([
    text(result),
    pos(position.x, position.y),
    textColor,
    lifespan(1, { fade: 0.5 }),
  ]);
}
