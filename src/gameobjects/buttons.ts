import type { GameObj, Vec2 } from 'kaboom';

export function addButton(
  gameObj: GameObj,
  txt: string,
  position: Vec2,
  callback: () => void,
) {
  // add a parent background object
  const button = gameObj.add([
    rect(300, 80, { radius: 8 }),
    pos(position),
    area(),
    scale(1),
    anchor('center'),
    outline(4),
    color(),
    opacity(0.8),
  ]);

  // add a child object that displays the text
  button.add([text(txt), anchor('center'), color(0, 0, 0)]);

  // onHoverUpdate() comes from area() component
  // it runs every frame when the object is being hovered
  button.onHoverUpdate(() => {
    const t = time() * 10;
    button.color = hsl2rgb((t / 10) % 1, 0.6, 0.7);
    button.scale = vec2(1.1);
    setCursor('pointer');
  });

  // onHoverEnd() comes from area() component
  // it runs once when the object stopped being hovered
  button.onHoverEnd(() => {
    button.scale = vec2(1);
    button.color = rgb();
  });

  // onClick() comes from area() component
  // it runs once when the object is clicked
  button.onClick(callback);

  return button;
}
