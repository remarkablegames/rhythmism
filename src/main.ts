import 'kaboom/global';

enum Sound {
  score = 'score',
  music = 'music',
}

loadSound(Sound.score, 'sounds/score.mp3');
loadSound(Sound.music, 'sounds/music.webm');

play(Sound.music, { loop: true });

enum Direction {
  left = 'left',
  down = 'down',
  up = 'up',
  right = 'right',
}

const directions = Object.values(Direction);

directions.forEach((direction) => {
  loadSprite(direction, `sprites/${direction}.png`);
});

function getPosition(direction: Direction, y = 400) {
  switch (direction) {
    case Direction.left:
      return pos(30, y);
    case Direction.down:
      return pos(110, y);
    case Direction.up:
      return pos(190, y);
    case Direction.right:
      return pos(270, y);
  }
}

enum Tag {
  left = 'left',
  down = 'down',
  up = 'up',
  right = 'right',
  direction = 'direction',
}

const keys = {
  [Direction.left]: add([
    sprite(Direction.left),
    getPosition(Direction.left),
    area(),
    opacity(0.5),
    Tag.left,
  ]),

  [Direction.down]: add([
    sprite(Direction.down),
    getPosition(Direction.down),
    area(),
    opacity(0.5),
    Tag.down,
  ]),

  [Direction.up]: add([
    sprite(Direction.up),
    getPosition(Direction.up),
    area(),
    opacity(0.5),
    Tag.up,
  ]),

  [Direction.right]: add([
    sprite(Direction.right),
    getPosition(Direction.right),
    area(),
    opacity(0.5),
    Tag.right,
  ]),
};

directions.forEach((direction) => {
  onCollideUpdate(direction, Tag.direction, () => {
    if (isKeyPressed(direction)) {
      play(Sound.score);
      addKaboom(center());
    }
  });

  onKeyDown(direction, () => {
    keys[direction].opacity = 1;
  });

  onKeyRelease(direction, () => {
    keys[direction].opacity = 0.5;
  });
});

loop(1, () => {
  const direction = directions[randi(4)];

  add([
    sprite(direction),
    getPosition(direction, -60),
    move(DOWN, 250),
    area(),
    offscreen({ destroy: true }),
    Tag.direction,
  ]);
});

// debug.inspect = true;
