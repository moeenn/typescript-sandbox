export const Direction = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
}

export type Direction = (typeof Direction)[keyof typeof Direction]
