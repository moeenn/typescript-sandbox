import { test, expect } from "vitest"
import { main } from "."

test("returns hello message", () => {
  const expected = "Hello world"
  const got = main()

  expect(got).toBe(expected)
})
