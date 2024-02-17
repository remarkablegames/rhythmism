export function addScore() {
  const scoreDisplay = add([
    text('0', { size: 32 }),
    pos(center().x, 5),
    color(255, 255, 255),
  ]);

  return (incrementBy = 1) => {
    scoreDisplay.text = String(parseInt(scoreDisplay.text) + incrementBy);
  };
}
