export function loadSounds(name: string, srcs: string[]) {
  try {
    return loadSound(name, srcs[0]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return loadSound(name, srcs[1]);
  }
}
