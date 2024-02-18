export function isDirectionKeyPressed(key: string) {
  switch (key) {
    case 'up':
      return isKeyPressed('up') || isKeyPressed('w');
    case 'left':
      return isKeyPressed('left') || isKeyPressed('a');
    case 'down':
      return isKeyPressed('down') || isKeyPressed('s');
    case 'right':
      return isKeyPressed('right') || isKeyPressed('d');
    default:
      return false;
  }
}
