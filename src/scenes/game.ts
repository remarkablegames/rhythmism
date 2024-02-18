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

const TARGET_AREA_Y = 540;

scene(Scene.game, (levelId: string) => {
  const level = levels[levelId];
  document.body.style.backgroundColor = level.color;
  const game = add([timer()]);

  game.add([
    sprite(Sprite.background),
    pos(width() / 2, height() / 2),
    anchor('center'),
  ]);

  const music = play(Sound.music, {
    volume: level.volume,
  });

  music.onEnd(() => {
    go(Scene.start);
  });

  music.paused = true;

  volumeSlider(music, level.volume);
  addKeys();
  addTimer();

  addPause(game, music);

  level.directions.forEach(({ direction, time, duration }) => {
    game.wait(time + level.offset, () => {
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
