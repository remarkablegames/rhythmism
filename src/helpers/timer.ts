import { Timer } from 'easytimer.js';

const timer = new Timer();

export function startTimer(callback: (time: string) => void) {
  timer.stop();
  timer.start({ precision: 'secondTenths' });

  timer.addEventListener('secondTenthsUpdated', () => {
    callback(
      timer
        .getTimeValues()
        .toString(['hours', 'minutes', 'seconds', 'secondTenths']),
    );
  });
}

export function getTime() {
  const time = timer.getTimeValues();
  return (
    time.minutes * 60 + time.seconds + timer.getTimeValues().secondTenths / 10
  );
}
