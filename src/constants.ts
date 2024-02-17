export enum Direction {
  left = 'directions/PurpleLeftArrow',
  down = 'directions/BlueDownArrow',
  up = 'directions/GreenUpArrow',
  right = 'directions/RedRightArrow',
}

export type DirectionKey = 'left' | 'down' | 'up' | 'right';

export const directions = Object.keys(Direction);

export enum Key {
  left = 'keys/GreyLeftArrow',
  down = 'keys/GreyDownArrow',
  up = 'keys/GreyUpArrow',
  right = 'keys/GreyRightArrow',
}

export enum Scene {
  game = 'game',
  load = 'load',
  pause = 'pause',
  preload = 'preload',
  start = 'start',
}

export enum Sprite {
  background = 'background',
}

export enum Sound {
  score = 'score',
  music = 'music',
  longPress = 'longPress',
}

export enum Tag {
  left = 'left',
  down = 'down',
  up = 'up',
  right = 'right',
  direction = 'direction',
}

export enum accuracyRadii {
  perfect = 10,
  excellent = 20,
  good = 30,
}
