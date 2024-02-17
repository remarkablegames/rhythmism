export function getPosition(
  direction: 'left' | 'down' | 'up' | 'right',
  y = 440,
) {
  switch (direction) {
    case 'left':
      return pos(50, y);
    case 'down':
      return pos(130, y);
    case 'up':
      return pos(210, y);
    case 'right':
      return pos(290, y);
  }
}
