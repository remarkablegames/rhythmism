import type { AudioPlay } from 'kaboom';

const x = 250;
const y = 15;
const width = 100;

/**
 * Current issues to fix:
 * - Slider still works, even when cursor is away from the bar
 *
 * Possible update:
 * - Add mute button
 * - Move volume to pause screen
 */
export function volumeSlider(music: AudioPlay, defaultVolume = 1.0) {
  // Volume level label above volume slider
  const percentNumberLabel = add([
    text(getText(Math.round(defaultVolume * 100)), {
      size: 12,
      width: 320,
      font: 'sans-serif',
    }),
    pos(280, 30),
  ]);

  // Entire volume bar in grey
  const volumeBar = add([rect(width, y), pos(x, y), color(80, 80, 80)]);

  // Volume slider
  const volumeSlider = add([
    rect(30, y),
    pos(defaultVolume === 1 ? 320 : 220 + 130 * defaultVolume, y),
    color(0, 125, 125),
  ]);

  // registers if dragging is working
  let isDragging = false;
  let offsetX = 0;

  // sets the difference of mouse and slider position
  onMouseDown(() => {
    if (volumeSlider) {
      isDragging = true;
      offsetX = mousePos().x - volumeSlider.pos.x;
    }
  });

  // resets drag back, otherwise, slider will indefinitely follow mouse position
  onMouseRelease(() => {
    isDragging = false;
  });

  onMouseMove(() => {
    if (isDragging) {
      // Allows the slider to work
      volumeSlider.pos.x = clamp(
        mousePos().x - offsetX,
        volumeBar.pos.x,
        volumeBar.pos.x + volumeBar.width - volumeSlider.width,
      );

      // Calculates slider and bar difference
      const percent = Math.round(
        ((volumeSlider.pos.x - volumeBar.pos.x) /
          (volumeBar.width - volumeSlider.width)) *
          100,
      );

      // sets the calculation to the text label "100"
      percentNumberLabel.text = getText(percent);

      // Changes the song volume based on the previous calc
      music.volume = percent / 100;
    }
  });
}

function getText(percentage: number) {
  return `Volume: ${percentage}`;
}
