import { ghosty } from '../sprites'

export function addEnemy(x: number, y: number) {
  return add([ghosty, pos(x, y), anchor('center')])
}
