import {
  Direction,
  DirectionKey,
  Scene,
  Sound,
  Sprite,
  Tag,
} from '../constants';
import { addKeys, addPause, addTimer } from '../gameobjects';
import { getPosition } from '../helpers';
import { volumeSlider } from '../helpers/volumeSlider';
import { levels } from '../levels';

const TIME_OFFSET = -2.0;
const TARGET_AREA_Y = 540;

scene(Scene.game, (levelId: string) => {
  const level = levels[levelId];

  const game = add([timer()]);

  game.add([
    sprite(Sprite.background),
    pos(width() / 2, height() / 2),
    anchor('center'),
    scale(1),
  ]);

  const music = play(Sound.music, {
    volume: level.volume,
  });

  music.onEnd(() => {
    go(Scene.start);
  });

  music.paused = true;

  volumeSlider(music);
  addKeys();
  addTimer();

  addPause(game, music);

  // @ts-expect-error duration hasn't been added to every JSON
  level.directions.forEach(({ direction, time, duration }) => {
    game.wait(time + TIME_OFFSET, () => {
      if (duration > 0.1) {
        game.add([
          getPosition(direction as 'left' | 'right' | 'down' | 'up', -80),
          move(DOWN, 250),
          rect(20, 100 * duration),
          color(117, 117, 117),
          opacity(0.5),
          area(),
          anchor('bot'),
          offscreen({ destroy: true }),
          'note',
        ]);
      }

      game.add([
        sprite(Direction[direction as DirectionKey]),
        getPosition(direction as DirectionKey, -60),
        move(DOWN, 250),
        area(),
        anchor('center'),
        offscreen({ destroy: true }),
        Tag.direction,
        'note',
      ]);
    });
  });

  game.add([
    rect(width(), 30),
    pos(0, TARGET_AREA_Y),
    color(255, 0, 0),
    opacity(0.5),
    area(),
    'targetArea',
  ]);

  music.paused = false;
});
