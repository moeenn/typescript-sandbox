import { Position } from "./position"
import { Direction } from "@/direction"

export class Entity {
  name: string
  position: Position
  step = 10

  constructor(name: string, position: Position) {
    this.name = name
    this.position = position
  }

  move(direction: Direction): Position {
    switch (direction) {
      case Direction.Up:
        this.position.y += this.step
        break

      case Direction.Down:
        this.position.y -= this.step
        break

      case Direction.Left:
        this.position.x -= this.step
        break

      case Direction.Right:
        this.position.x += this.step
        break
    }

    return this.position
  }
}