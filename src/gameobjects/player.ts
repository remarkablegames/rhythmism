import { bean } from '../sprites'

export function addPlayer(x = center().x, y = center().y) {
  return add([bean, pos(x, y), rotate(0), anchor('center')])
}
