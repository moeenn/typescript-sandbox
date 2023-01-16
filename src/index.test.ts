import { test, expect } from "vitest"
import { main } from "."

test("returns hello message", async () => {
  const expected = "Hello world"
  const got = await main()

  expect(got).toBe(expected)
})
