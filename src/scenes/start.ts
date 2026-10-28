import './game';
import './load';
import './preload';
import './menu';

import { Scene } from '../constants';

export function start() {
  go(Scene.preload);
}
