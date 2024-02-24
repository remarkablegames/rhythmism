export enum Direction {
  left = 'directions/left',
  down = 'directions/down',
  up = 'directions/up',
  right = 'directions/right',
}

export type DirectionKey = 'left' | 'down' | 'up' | 'right';

export enum Key {
  left = 'keys/left',
  down = 'keys/down',
  up = 'keys/up',
  right = 'keys/right',
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
  star = 'star',
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
