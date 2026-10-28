import 'kaplay/global';
import './style.css';

import kaplay from 'kaplay';

kaplay({
  background: [255, 255, 255],
  width: 360,
  height: 480,
});

const { start } = await import('./scenes');

start();

// or press F1
// debug.inspect = true;
