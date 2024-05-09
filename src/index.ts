import { Entity } from "@/entity/entity"
import { Position } from "./entity/position"
import { Direction } from "@/direction"

export async function main(): Promise<string> {
  const e = new Entity("Entity one", new Position(10, 20))
  {
    e.move(Direction.Right)
    e.move(Direction.Right)
    e.move(Direction.Down)
  }

  console.log(e.position)
  return e.position.toString()
}

main().catch(console.error)
