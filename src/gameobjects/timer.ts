import { getTime, startTimer } from '../helpers';

export function addTimer() {
  const timerDisplay = add([
    text('00:00:00:0', { size: 16 }),
    pos(width() - 100, 0),
    color(255, 255, 255),
  ]);

  startTimer((time) => {
    timerDisplay.text = time;
  });

  const map: Record<
    string,
    { direction: string; time: number; duration?: number }
  > = {};

  onKeyPress((key) => {
    const direction = {
      direction: key,
      time: getTime(),
    };
    map[key] = direction;
  });

  onKeyRelease((key) => {
    const time = getTime();
    const previousDirection = map[key];
    const direction = {
      ...previousDirection,
      duration: Number((time - previousDirection.time).toFixed(1)),
    };

    if (debug.inspect) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(direction));
    }
  });
}
