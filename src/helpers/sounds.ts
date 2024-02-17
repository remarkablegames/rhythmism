export function loadSounds(name: string, srcs: string[]) {
  try {
    return loadSound(name, srcs[0]);
  } catch (error) {
    return loadSound(name, srcs[1]);
  }
}
