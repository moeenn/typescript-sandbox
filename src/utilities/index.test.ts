import { test, expect } from "vitest"
import { add } from "@/utilities"

test("add function", () => {
  const input = [10, 20]
  const expected = 30
  const got = add(input[0], input[1])

  expect(got).toBe(expected)
})