import 'kaplay/global';

import kaplay from 'kaplay';

kaplay({
  background: [0, 0, 0, 0],
  width: 360,
  height: 480,
  letterbox: true,
  scale: 2,
});

const { start } = await import('./scenes');

start();

// or press F1
// debug.inspect = true;
