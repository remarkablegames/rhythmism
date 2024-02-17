import type { Player } from '../types'

// pixels per second
const SPEED = 320

export function addCursorKeys(player: Player) {
  onKeyDown('left', () => {
    player.move(-SPEED, 0)
  })

  onKeyDown('right', () => {
    player.move(SPEED, 0)
  })

  onKeyDown('up', () => {
    player.move(0, -SPEED)
  })

  onKeyDown('down', () => {
    player.move(0, SPEED)
  })
}
