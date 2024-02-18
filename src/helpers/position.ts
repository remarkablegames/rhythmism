export function getPosition(
  direction: 'left' | 'down' | 'up' | 'right',
  y = 440,
) {
  switch (direction) {
    case 'left':
      return pos(60, y);
    case 'down':
      return pos(140, y);
    case 'up':
      return pos(220, y);
    case 'right':
      return pos(300, y);
  }
}
